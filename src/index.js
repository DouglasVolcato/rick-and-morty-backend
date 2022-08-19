const express = require("express");
const app = express();
const cors = require("cors");
const connectToDatabase = require("./database/database");
require("dotenv").config();

// const authRoutes = require("./src/auth");
const charactersRoutes = require("./characters/characters.routes");
// const usersRoutes = require("./src/users");

connectToDatabase();
app.use(cors());
app.use(express.json());

// app.use("/auth", authRoutes);
app.use("/characters", charactersRoutes);
// app.use("/users", usersRoutes);

const port = process.env.PORT ?? 3001;
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
