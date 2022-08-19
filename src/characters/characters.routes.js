const router = require("express").Router();
const charactersControllers = require("./characters.controller");

router.post("/create", charactersControllers.createCharacterController);

router.get("/", charactersControllers.getAllCharactersController);

module.exports = router;
