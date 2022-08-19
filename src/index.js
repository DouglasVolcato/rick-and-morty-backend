const express = require("express");
const app = express()
const cors = require("cors")
const connectToDatabase = require("./database/database")
require("dotenv").config()

// const authRoute = require("./src/auth")
// const characters = require("./src/characters")
// const usersRoute = require("./src/users")

connectToDatabase()
app.use(cors())
app.use(express.json())

app.get("/", (req,res) => res.send({message: "Hello World!"}))

const port = process.env.PORT ?? 3100
app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})