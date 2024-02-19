const mongoose = require("mongoose")

module.exports = () => {
    mongoose.connect(process.env.url).then((res) => {
        console.log(">>>Successfully connnected>>>");
    }).catch((error) => {
        console.log("error");
    })
}