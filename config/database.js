const mongoose = require("mongoose")
require("dotenv").config();



mongoose.set('strictQuery', false);


const connectToDB = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log(`Conected DB: ${process.env.MONGO}`);
        }).catch((error) => {
            console.log(error);
            process.exit(1);
        })
}

module.exports = connectToDB