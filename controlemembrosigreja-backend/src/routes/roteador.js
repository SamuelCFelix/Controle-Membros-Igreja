const express = require("express");
const router = express.Router();

// Importar os módulos de rota
const membroRoutes = require("./membro/membroRoutes");

// Definir os prefixos das rotas
router.use("/membros", membroRoutes);

module.exports = router;
