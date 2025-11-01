const prisma = require("../../utils/prismaClient");
const logger = require("../../utils/logger");
const removeTimestamps = require("../../utils/removeTimestamps");

module.exports = {
  async getAllMembros() {
    try {
      const buscarMembrosDB = await prisma.membro.findMany({
        include: {
          conselhoFiscal: { select: { id: true, nome: true, membroId: true } },
          suplentes: { select: { id: true, nome: true, membroId: true } },
          diretoriaIgreja: { select: { id: true, nome: true, membroId: true } },
          auxiliaresProfessor: {
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
          suplentes,
          diretoriaIgreja,
          auxiliaresProfessor,
          ...membroData
        } = data;

        const membro = await prisma.membro.create({
          data: {
            ...membroData, // só os campos “normais”
            conselhoFiscal: conselhoFiscal?.length
              ? { create: conselhoFiscal }
              : undefined,
            suplentes: suplentes?.length ? { create: suplentes } : undefined,
            diretoriaIgreja: diretoriaIgreja?.length
              ? { create: diretoriaIgreja }
              : undefined,
            auxiliaresProfessor: auxiliaresProfessor?.length
              ? { create: auxiliaresProfessor }
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
};
