const prisma = require("../../utils/prismaClient");
const logger = require("../../utils/logger");
const removeTimestamps = require("../../utils/removeTimestamps");

module.exports = {
  async getAllMembros() {
    try {
      const buscarMembrosDB = await prisma.membro.findMany({
        include: {
          conselhoFiscal: { select: { id: true, nome: true, membroId: true } },
          suplente: { select: { id: true, nome: true, membroId: true } },
          diretoriaIgreja: { select: { id: true, nome: true, membroId: true } },
          auxiliarProfessor: {
            select: { id: true, nome: true, membroId: true },
          },
        },
        orderBy: { nome: "asc" },
      });

      // remove automaticamente createdAt e updatedAt de tudo
      return removeTimestamps(buscarMembrosDB);
    } catch (error) {
      error.path = "/models/membroModels/getAllMembros";
      logger.error("Erro ao buscar todos os membros", error);
      throw error;
    }
  },

  async createMembro(data) {
    try {
      const novoMembroDB = await prisma.$transaction(async (prisma) => {
        // Separar os campos do membro “simples”
        const {
          conselhoFiscal,
          suplente,
          diretoriaIgreja,
          auxiliarProfessor,
          ...membroData
        } = data;

        const membro = await prisma.membro.create({
          data: {
            ...membroData, // só os campos “normais”
            conselhoFiscal: conselhoFiscal?.length
              ? { create: conselhoFiscal }
              : undefined,
            suplente: suplente?.length ? { create: suplente } : undefined,
            diretoriaIgreja: diretoriaIgreja?.length
              ? { create: diretoriaIgreja }
              : undefined,
            auxiliarProfessor: auxiliarProfessor?.length
              ? { create: auxiliarProfessor }
              : undefined,
          },
        });

        return membro;
      });

      return removeTimestamps(novoMembroDB);
    } catch (error) {
      error.path = "/models/membroModels/createMembro";
      logger.error("Erro ao criar um novo membro", error);
      throw error;
    }
  },

  async updateMembro(membroId, data) {
    try {
      const atualizarMembroDB = await prisma.$transaction(async (prisma) => {
        // Separa as relações do restante dos dados do membro
        const {
          conselhoFiscal,
          suplente,
          diretoriaIgreja,
          auxiliarProfessor,
          ...membroData
        } = data;

        // Atualiza os dados principais do membro
        const membroAtualizado = await prisma.membro.update({
          where: { id: membroId },
          data: { ...membroData },
        });

        // Função genérica para atualizar, criar ou deletar registros relacionados
        const atualizarRelacoes = async (nomeRelacao, dados) => {
          // Se não veio nada (null ou undefined), não faz nada
          if (!dados || !Array.isArray(dados)) return;

          // Busca todos os IDs atuais no banco para esse membro
          const todosIdsDB = await prisma[nomeRelacao].findMany({
            where: { membroId },
            select: { id: true },
          });

          const idsDB = todosIdsDB?.map((i) => i.id);
          const idsEnviados = dados.filter((d) => d.id)?.map((d) => d.id);

          // Determina quais IDs devem ser removidos (os que estavam no banco mas não vieram do front)
          const idsParaDeletar = idsDB.filter(
            (id) => !idsEnviados.includes(id)
          );

          // Deleta os registros removidos
          if (idsParaDeletar?.length > 0) {
            await prisma[nomeRelacao].deleteMany({
              where: { id: { in: idsParaDeletar } },
            });
          }

          // Atualiza os que possuem ID ou cria novos
          await Promise.all(
            dados?.map(async (item) => {
              if (item.id) {
                // Atualizar registro existente
                return prisma[nomeRelacao].update({
                  where: { id: item.id },
                  data: { nome: item.nome },
                });
              } else if (item.nome && item.nome.trim() !== "") {
                // Criar novo registro
                return prisma[nomeRelacao].create({
                  data: { nome: item.nome, membroId },
                });
              }
            })
          );
        };

        // Atualiza cada uma das relações (somente se vierem do front)
        await atualizarRelacoes("conselhoFiscal", conselhoFiscal ?? null);
        await atualizarRelacoes("suplente", suplente ?? null);
        await atualizarRelacoes("diretoriaIgreja", diretoriaIgreja ?? null);
        await atualizarRelacoes("auxiliarProfessor", auxiliarProfessor ?? null);

        return membroAtualizado;
      });

      return removeTimestamps(atualizarMembroDB);
    } catch (error) {
      error.path = "/models/membroModels/updateMembro";
      logger.error("Erro ao atualizar o membro", error);
      throw error;
    }
  },

  async deleteMembro(membroId) {
    try {
      await prisma.membro.delete({
        where: { id: membroId },
      });

      return "Membro deletado com sucesso";
    } catch (error) {
      error.path = "/models/membroModels/deleteMembro";
      logger.error("Erro ao deletar o membro", error);
      throw error;
    }
  },
};
