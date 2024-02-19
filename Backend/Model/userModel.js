const mongoose = require("mongoose")
const usersSchema = new mongoose.Schema({
    name:
        { type: String },
    email:
        { type: String },
    phone:
        { type: String },
    image:
        { type: String },
    password:
        { type: String },
    role:
        { type: Number, enum: [0, 1], default: 1 }, // admin = 0 , user = 1 
    status:
        { type: Number, enum: [0, 1] },//  active= 0 , inactive = 1 
    token:
        { type: String },
    logintime:
        { type: String }

}, { timestamps: true })

const users = mongoose.model("users", usersSchema)
module.exports = users