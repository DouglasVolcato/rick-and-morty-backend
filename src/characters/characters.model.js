const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  user: String,
  name: String,
  image: String,
});

module.exports = Character = mongoose.model("character", characterSchema);
