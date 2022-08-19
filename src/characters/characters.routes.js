const router = require("express").Router();
const charactersControllers = require("./characters.controller");

router.post("/create", charactersControllers.createCharactersController);

router.get("/", charactersControllers.getAllCharactersController);

router.get("/:id", charactersControllers.findByIdController);

router.put("/update/:id", charactersControllers.updateCharactersController);

router.delete("/delete/:id", charactersControllers.deleteCharacterController);

// router.get("/search", charactersControllers.searchCharactersController);

module.exports = router;
