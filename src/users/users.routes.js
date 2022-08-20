const router = require("express").Router();
const usersControllers = require("./users.controllers");

router.post("/create", usersControllers.cresteUsersController);
router.get("/", usersControllers.getAllUsersController);

module.exports = router;
