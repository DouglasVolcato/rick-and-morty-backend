const usersServices = require("./users.services")

class UsersControllers {
  cresteUsersController = async (req, res) => {
    try {
      const { name, username, email, password, photo } = req.body;
      const created = await usersServices.createUsersService({
        name,
        username,
        email,
        password,
        photo,
      });
      if (!created) {
        res.status(400).send({ message: "Bad Request" });
      } else {
        res.status(201).send(created);
      }
    } catch (err) {
      res.status(400).send({ message: "Bad Request" });
    }
  };

  getAllUsersController = async (req, res) => {
    try {
        const userList = await usersServices.getAllUsersService();
        if (!userList || userList.length === 0) {
          res.status(404).send({ message: "Not found" });
        } else {
          res.status(200).send(userList);
        }
      } catch (err) {
        res.status(404).send({ message: "Not found" });
      }
  };
}

module.exports = usersControllers = new UsersControllers();
