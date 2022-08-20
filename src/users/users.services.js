const User = require("./users.model");

class UsersServices {
  createUsersService = async (body) => {
    return await User.create(body);
  };

  getAllUsersService = async () => {
    return await User.find();
  };
}

module.exports = usersServices = new UsersServices();
