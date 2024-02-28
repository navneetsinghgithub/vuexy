const userModel = require("../Model/userModel")
const { tokengenerate } = require("../jwt/jsonWebToken")
const { Validator } = require("node-input-validator")
const { imageupload, checkValidation } = require("../helper/helper")
const bcrypt = require("bcrypt")
const saltRound = 10

module.exports = {
    signup: async (req, res) => {
        try {

            const v = new Validator(req.body, {
                name: "required",
                email: "required",
                password: "required"
            })
            let errorResponse = await checkValidation(v)
            if (errorResponse) {
                return res.json({
                    success: false,
                    status: 404,
                    message: errorResponse,
                    body: {}
                })
            }
            const email = await userModel.findOne({
                email: req.body.email,
            })
            if (email) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "email already exist",
                    body: {}
                })
            }
            const phone = await userModel.findOne({
                phone: req.body.phone
            })
            if (phone) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "phone number already exist",
                    body: {}
                })
            }


            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }


            const password = await bcrypt.hash(req.body.password, saltRound)
            const otp = 1111
            const sign = await userModel.create({
                name: req.body.name, email: req.body.email, phone: req.body.phone,
                image: req.body.image, role: req.body.role, status: req.body.status, password: password, otp: otp
            })
            const token = await tokengenerate(sign._id)

            const updateResult = await userModel.findByIdAndUpdate({
                _id: sign._id
            }, { token: token.token, logintime: token.time }, { new: true })
            return res.json({
                success: true,
                status: 200,
                message: "users created",
                body: updateResult
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    login: async (req, res) => {
        try {
            const login = await userModel.findOne({ email: req.body.email })
            if (!login) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "data not found",
                    body: {}
                })
            }
            else if (login.isVerified === 0) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "not verified",
                    body: {}
                })
            }
            const token = await tokengenerate(login._id)
            const updateResult = await userModel.findByIdAndUpdate({
                _id: login._id
            }, { token: token.token, logintime: token.time }, { new: true })
            if (!login) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "email or password is not correct",
                    body: {}
                })
            } else {
                if (login.email == req.body.email) {
                    const password = await bcrypt.compare(req.body.password, login.password);
                    if (!password) {
                        return res.json({
                            success: false,
                            status: 400,
                            message: "wrong password",
                            body: {}
                        })
                    } else {
                        return res.json({
                            success: true,
                            status: 200,
                            message: "login success",
                            body: login
                        })
                    }
                }

            }

        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }

    },

    findUser: async (req, res) => {
        try {
            const find = await userModel.find().count()
            return res.json({
                success: true,
                status: 200,
                message: " find all users",
                body: find
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    findSingleUser: async (req, res) => {
        try {
            const findSingle = await userModel.findById({
                _id: req.params.id
            })
            return res.json({
                success: true,
                status: 200,
                message: " find single users",
                body: findSingle
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    updateUser: async (req, res) => {
        try {
            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }
            const update = await userModel.findByIdAndUpdate({
                _id: req.params.id
            },
                { name: req.body.name, email: req.body.email, image: req.body.image, phone: req.body.phone },
                { new: true })
             
            return res.json({
                success: true,
                status: 200,
                message: " update users",
                body: update
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deletes = await userModel.findByIdAndDelete({
                _id: req.params.id
            })
            return res.json({
                success: true,
                status: 200,
                message: " delete users",
                body: deletes
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    changePassword: async (req, res) => {
        try {
            const data = await userModel.findOne({ _id: req.user._id })
            const decryptPassword = await bcrypt.compare(req.body.newPassword, data.password)
            if (decryptPassword == false) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "password does not match",
                    body: {}
                })
            }
            const encryptPassword = await bcrypt.hash(req.body.newPassword, saltRound)
            data.password = encryptPassword
            data.save()
            return res.json({
                success: true,
                status: 200,
                message: "password updated successfully",
                body: data
            })

        } catch (error) {
            return res.json({
                success: false,
                status: 404,
                message: "error"
            })
        }
    },

    logout: async (req, res) => {
        try {
            const logout = await userModel.findByIdAndUpdate({
                _id: req.user._id
            }, { logintime: 0 }, { new: true })
            if (!logout) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "you are already logout",
                    body: {}
                })
            } else {
                return res.json({
                    success: true,
                    status: 200,
                    message: "logout successfully",
                    body: {}
                })
            }
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    }

}