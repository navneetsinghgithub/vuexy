const mongoose = require("mongoose")
const usersSchema = new mongoose.Schema({
    name:
        { type: String },
    email:
        { type: String },
    phone:
        { type: Number },
    image:
        { type: String },
    password:
        { type: String },
    otp:
        { type: Number ,default:0 },
    role:
        { type: Number, enum: [0, 1], default: 1 }, // admin = 0 , user = 1 
    status:
        { type: Boolean,  default:false },//  inactive= 0 , active = 1 
    token:
        { type: String },
    logintime:
        { type: Number },       

}, { timestamps: true })

const users = mongoose.model("users", usersSchema)
module.exports = users