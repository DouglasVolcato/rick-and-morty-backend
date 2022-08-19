const charactersServices = require("./characters.services");

class CharactersControllers {
  createCharactersController = async (req, usersRoutes) => {
    try {
      const { user, name, imageUrl } = req.body;

      const created = await charactersServices.createCharactersService({
        user,
        name,
        imageUrl,
      });

      if (!created) {
        res.status(400).send({ message: "Bad Request" });
      } else {
        res.status(201).send("Created");
      }
    } catch (err) {
      res.status(400).send({ message: "Bad Request" });
    }
  };

  getAllCharactersController = async (req, res) => {
    try {
      const characterList = await charactersServices.getAllCharactersService();

      if (!characterList) {
        req.status(401).res({ message: "Not found" });
      }

      res.status(200).send(characterList);
    } catch (err) {
      req.status(401).res({ message: "Not found" });
    }
  };

  findByIdController = async (req, res) => {
    try {
      const foundChar = await charactersServices.findByIdService(req.params.id);

      if (!foundChar) {
        res.status(400).send({ message: "Not Found" });
      }

      res.status(200).send(foundChar);
    } catch (err) {
      res.status(400).send({ message: "Not Found" });
    }
  };

  updateCharactersController = async (req, res) => {
    const id = req.params.id;

    try {
      const { name, imageUrl } = req.body;
      const updated = await charactersServices.updateCharactersService(id, {
        name,
        imageUrl,
      });
      if (!updated) {
        res.status(400).send({ message: "Bad Request" });
      }
      res.status(200).send(updated);
    } catch (err) {
      res.status(400).send({ message: "Bad Request" });
    }
  };
  deleteCharacterController = async (req, res) => {
    try {
      const deleatedChar = await charactersServices.deleteCharacterService(
        req.params.id
      );

      if (!deleatedChar) {
        res.status(400).send({ message: "Not Found" });
      } else {
        res.status(200).send(deleatedChar);
      }
    } catch (err) {
      res.status(400).send({ message: "Not Found" });
    }
  };
  //   searchCharactersController = async (req, res) => {
  //     res.status(200).send(charactersServices.searchCharactersService())
  //   }
}

module.exports = charactersControllers = new CharactersControllers();
