const router = require("express").Router();
const charactersControllers = require("./characters.controllers");

router.post("/create", charactersControllers.createCharactersController);
router.get("/", charactersControllers.getAllCharactersController);
router.get("/:id", charactersControllers.findByIdController);
router.put("/update/:id", charactersControllers.updateCharactersController);
router.delete("/delete/:id", charactersControllers.deleteCharacterController);
router.get("/search/:name", charactersControllers.searchCharactersController);

module.exports = router;
