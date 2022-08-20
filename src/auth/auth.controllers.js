const authServices = require("./auth.services");

class AuthControllers {
  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await authServices.findUser(email);
      if (!foundUser) {
        res.status(400).send({ message: "Bad Request" });
      } else {
        const verify = await authServices.verifyPassword(password, foundUser);

        if (verify == true) {
          res.status(200).send({ message: "OK" });
        } else {
          res.status(400).send({ message: "Bad Request" });
        }
      }
    } catch (err) {
        res.status(400).send({ message: "Bad Request1" });
    }
  };
}

module.exports = authControllers = new AuthControllers();
