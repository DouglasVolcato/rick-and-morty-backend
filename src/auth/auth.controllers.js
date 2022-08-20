const authServices = require("./auth.services");
const bcrypt = require("bcryptjs");

class AuthControllers {
  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await authServices.findUser(email);

      if (!foundUser) {
        res.status(400).send({ message: "Email not Registered" });
      } else {
        const verify = await bcrypt.compare(password, foundUser.password);

        if (verify === true) {
          res.status(200).send({ message: "Everything is ok" });
        } else {
          res.status(400).send({ message: "Wrong password" });
        }
      }
    } catch (err) {
      res.status(400).send({ message: "Error during login" });
      console.log(err);
    }
  };
}

module.exports = authControllers = new AuthControllers();