const express = require("express");
const routes = express.Router();

// Importando o controller de membros
const membroControllers = require("../../controllers/membro/membroControllers");

routes.get("/", membroControllers.getAllMembros);
routes.post("/", membroControllers.createMembro);

module.exports = routes;
