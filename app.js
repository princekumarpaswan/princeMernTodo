const express = require("express")
const cors = require("cors")
const app = express();
const connectToDB = require("./config/database")
const userRoutes = require("./routes/userRouters")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


connectToDB()

app.use("/", userRoutes)




module.exports = app