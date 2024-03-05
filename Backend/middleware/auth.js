const secretKey = "123456"
const jwt = require("jsonwebtoken")
const userModel = require("../Model/userModel")

module.exports = {
    auth: async (req, res, next) => {
        let token

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            try {
                const token = req.headers.authorization.split(" ")[1]
                const decode = await jwt.verify(token, secretKey)
             
                const user = await userModel.findByIdAndUpdate({
                    _id: decode._id
                }, { logintime: decode.iat }, { new: true })
                if (user) {
                    req.user = user
                    next();
                } else {
                    return res.json({
                        message: "Login first"
                    })
                }
            } catch (error) {
                console.log(error, "invalid signature")
                return res.json({
                    message: "invalid token"
                })
            }
        } else {
            return res.json({
                message: "not token",
                status: 400
            })
        }
    }
}












