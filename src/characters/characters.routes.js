const router = require("express").Router();
const charactersController = require("./characters.controller");

router.get("/characters", charactersController.createCharacterController);

module.exports = router;
