const router = require("express").Router();
const usersControllers = require("./users.controllers");

router.post("/create", usersControllers.createUsersController);
router.get("/", usersControllers.getAllUsersController);

module.exports = router;
