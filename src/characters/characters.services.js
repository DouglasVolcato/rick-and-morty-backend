const Character = require("./characters.model");

class CharactersServices {
  createCharacterService = async (body) => {
    return await Character.create(body);
  };
  getAllCharactersService = async () => {
    return await Character.find();
  };
}

module.exports = charactersServices = new CharactersServices();
