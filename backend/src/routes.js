const express = require("express");

const connection = require("./database/connections");

const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfillerController = require("./controllers/ProfillerController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    nome: "Edson de Paulo Ramalho",
    empresa: "AgenciaCrie"
  });
});

routes.get("/ongs", OngController.index);

routes.post("/ongs", OngController.create);

routes.post("/session", SessionController.create);

routes.get("/profiller", ProfillerController.index);

routes.get("/incidents", IncidentsController.index);

routes.post("/incidents", IncidentsController.create);

routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
