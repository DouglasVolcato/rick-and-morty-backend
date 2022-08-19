const mongoose = require("mongoose");

module.exports = connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(`Error connecting to Database: ${err}`));
};
