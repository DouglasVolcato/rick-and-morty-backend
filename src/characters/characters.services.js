const Character = require("./characters.model");

class CharactersServices {
  createCharactersService = async (body) => {
    return await Character.create(body);
  };
  getAllCharactersService = async () => {
    return await Character.find();
  };
  findByIdService = async (id) => {
    return await Character.find({ _id: id });
  };
  updateCharactersService = async (id, body) => {
    return await Character.findOneAndUpdate({ _id: id }, body, { new: true });
  };
  deleteCharacterService = async (id) => {
    return await Character.findOneAndDelete({ _id: id });
  };
  searchCharactersService = async (name) => {
    return await Character.findOne({ name: name });
  };
}

module.exports = charactersServices = new CharactersServices();
