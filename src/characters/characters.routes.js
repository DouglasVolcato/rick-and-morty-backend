const router = require("express").Router();
const charactersControllers = require("./characters.controllers");

router.get("/search", charactersControllers.searchCharactersController);
router.post("/create", charactersControllers.createCharactersController);
router.get("", charactersControllers.getAllCharactersController);
router.get("/find/:id", charactersControllers.findByIdController);
router.put("/update/:id", charactersControllers.updateCharactersController);
router.delete("/delete/:id", charactersControllers.deleteCharacterController);
module.exports = router;
