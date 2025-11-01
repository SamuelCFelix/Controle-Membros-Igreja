const membroModels = require("../../models/membro/membroModels");
const logger = require("../../utils/logger");

module.exports = {
  async getAllMembros(req, res) {
    try {
      const membros = await membroModels.getAllMembros();
      return res.status(200).json(membros);
    } catch (error) {
      logger.error("Erro no controller ao buscar todos os membros", error);
      res.status(500).json({ error: "Erro ao buscar todos os membros" });
    }
  },

  async createMembro(req, res) {
    try {
      const data = req.body;
      const novoMembro = await membroModels.createMembro(data);
      return res.status(201).json(novoMembro);
    } catch (error) {
      logger.error("Erro no controller ao criar um novo membro", error);
      res.status(500).json({ error: "Erro ao criar um novo membro" });
    }
  },
};
