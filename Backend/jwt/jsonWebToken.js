const userModel = require("../Model/userModel")
const jwt = require("jsonwebtoken")

module.exports = {
    tokengenerate: async (id) => {
        try {
            const secretKey = "123456"
            const token = await jwt.sign({ _id: id }, secretKey)
// console.log(token,"tokennnnnnnnnnn");
            const decode = await jwt.verify(token, secretKey)

            const time = Math.floor(Date.now() / 1000)
            const times = await userModel.findByIdAndUpdate({
                _id: decode._id
            }, { logintime: decode.iat, token: token }, { new: true })
            return { token: token, time: time }
        } catch (error) {
            // console.log(error, "error");
        }
    }
}