// LOGIC

// const userSchema = require("../model/userSchema");
const User = require("../model/userSchema")

exports.home = (req, res) => {
    res.status(201).send("hello from me")
}


exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // to check
        if (!name && !email && !password) {
            throw new Error("Name Email and Password required");

        }
        else {
            const user = await User.create({ name, email, password });
            res.status(201).json({
                succes: true,
                message: "User created sucessfully",
                user
            })
        }

    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            succes: true,
            users,
        })
    } catch (error) {
        res.status(400).json({
            sucess: false,
            message: error,
        })
    }
}

exports.getUserByName = async (req, res) => {
    try {
        const _id = req.params.id;
        const users = await User.findById(_id)
        res.status(200).json({
            succes: true,
            users,
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: error
        })
    }
}

exports.findUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name && !email && !password) {
            throw new Error("Name Email and Password required")

        } else {
            const found = await User.findOne({ name: name, email: email, password: password })
            res.status(200).json({
                succes: true,
                found,
            })
        }
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: error
        })
    }
}




// exports.createTodo = async (req, res) => {
//     try {
//         const _id = req.params.id;

//         const createTask = await User.findByIdAndUpdate(_id, req.body, { todo: true });
//         res.status(201).json({
//             succes: true,
//             message: "User created sucessfully",
//             createTask,
//         })


//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             sucess: false,
//             message: error,
//         })
//     }
// }

// exports.createTask = async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const createTask = await User.findByIdAndUpdate(_id, req.body)
//         res.status(201).json({
//             succes: true,
//             message: "User created TAsk sucessfully",
//             createTask,
//         })
//     } catch (error) {
//         res.status(400).json({
//             sucess: false,
//             message: error,
//         })
//     }
// }

