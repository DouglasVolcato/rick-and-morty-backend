const charactersServices = require("./characters.services");

class CharactersControllers {
  createCharacterController = async (req, res) => {
    const { user, name, imageUrl } = req.body;

    const created = await charactersServices
      .createCharacterService({
        user,
        name,
        imageUrl,
      })
      .catch((err) => {
        res.status(400).send({ message: "Bad Request" });
      });

    if (!created) {
      res.status(400).send({ message: "Bad Request" });
    } else {
      res.status(201).send("Created");
    }
  };

  getAllCharactersController = async (req, res) => {
    const characterList = await charactersServices
      .getAllCharactersService()
      .catch((err) => {
        req.status(401).res({ message: "Not found" });
      });

    if (!characterList) {
      req.status(401).res({ message: "Not found" });
    }

    res.status(200).send(characterList);
  };
}

module.exports = charactersControllers = new CharactersControllers();
