const mongoose = require('mongoose')
const validator = require("validator")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is Required"],
        trim: true
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        trim: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        require: [true, "Password is required"],
        trim: true
    },
    // todo: {
    //     type: [""],
    //     require: true,
    //     date: {
    //         type: Date,
    //         default: Date.now
    //     }, time: {
    //         type: Date,
    //         default: new Date().getMinutes
    //     }
    // },
    // task: {
    //     type: [""],
    //     // maxItems: 10,
    //     trim: true,
    //     date: {
    //         type: Date,
    //         default: Date.now
    //     },
    //     time: {
    //         type: Date,
    //         default: new Date().getMinutes
    //     }

    // }
});

module.exports = mongoose.model("User", UserSchema)