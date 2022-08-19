const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  user: String,
  name: String,
  imageUrl: String,
});

module.exports = Character = mongoose.model("character", characterSchema);
