const jwt = require("jsonwebtoken");
const authServices = require("./auth.services");

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ message: "The token was not informed" });
  }

  jwt.verify(authorization, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token" });
    }

    const user = await authServices.findUserById(decoded.id);

    if (!user || !user._id) {
      return res.status(401).send({ message: "Invalid token" });
    }

    req.userId = user._id;

    return next();
  });
};
