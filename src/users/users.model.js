const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);
