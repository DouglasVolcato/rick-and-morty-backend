const User = require("../users/users.model");

class AuthServices {
  findUser = async (email) => {
    return await User.findOne({ email: email });
  };

  verifyPassword = async (password, user) => {
    if (user.password === password) {
      return true;
    } else {
      return false;
    }
  };
}

module.exports = authServices = new AuthServices();
