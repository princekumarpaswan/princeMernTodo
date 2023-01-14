const express = require("express")
const app = express();
const connectToDB = require("./config/database")
const userRoutes = require("./routes/userRouters")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))


connectToDB()

app.use("/", userRoutes)




module.exports = app