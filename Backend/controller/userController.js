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
                return res.json(errorResponse)
            }
            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }


            const password = await bcrypt.hash(req.body.password, saltRound)
            const sign = await userModel.create({
                name: req.body.name, email: req.body.email, phone: req.body.phone,
                image: req.body.image, role: req.body.role, status: req.body.status, password: password,
            })
            const token = await tokengenerate(sign._id)

            const updateResult = await userModel.findByIdAndUpdate({
                _id: sign._id
            }, { token: token.token, logintime: token.time }, { new: true })
            return res.json({
                message: "users created",
                status: 200,
                body: updateResult
            })
        } catch (error) {
            console.log(error, "error");
            return;
        }
    },
    login: async (req, res) => {
        try {
            const login = await userModel.findOne({ email: req.body.email })
            if (!login) {
                return res.json({
                    message: "data not found",
                    status: 400,
                    body: {}
                })
            }
            else if (login.isVerified === 0) {
                return res.json({
                    message: "not verified",
                    status: 400,
                    body: {}
                })
            }
            const token = await tokengenerate(login._id)
            const updateResult = await userModel.findByIdAndUpdate({
                _id: login._id
            }, { token: token.token, logintime: token.time }, { new: true })
            if (!login) {
                return res.json({
                    message: "email or password is not correct",
                    status: 400,
                    body: {}
                })
            } else {
                if (login.email == req.body.email) {
                    const password = await bcrypt.compare(req.body.password, login.password);
                    if (!password) {
                        return res.json({
                            message: "wrong password",
                            status: 400,
                            body: {}
                        })
                    } else {
                        return res.json({
                            message: "login success",
                            status: 200,
                            body: login
                        })
                    }
                }

            }

        } catch (error) {
            console.log(error, "error");
        }

    },
    findUser: async (req, res) => {
        try {
            const find = await userModel.find()
            return res.json({
                message: " find all users",
                status: 200,
                body: find
            })
        } catch (error) {
            console.log(error, "error");
            return;
        }
    },
    findSingleUser: async (req, res) => {
        try {
            const findSingle = await userModel.findById({
                _id: req.params.id
            })
            return res.json({
                message: " find single users",
                status: 200,
                body: findSingle
            })
        } catch (error) {
            console.log(error, "error");
            return;
        }
    },
    updateUser: async (req, res) => {
        try {
            const update = await userModel.findByIdAndUpdate({
                _id: req.params.id
            },
                { name: req.body.name, email: req.body.email, image: req.body.image, phone: req.body.phone },
                { new: true })
            return res.json({
                message: " update users",
                status: 200,
                body: update
            })
        } catch (error) {
            console.log(error, "error");
            return;
        }
    },
    deleteUser: async (req, res) => {
        try {
            const deletes = await userModel.findByIdAndDelete({
                _id: req.params.id
            })
            return res.json({
                message: " delete users",
                status: 200,
                body: deletes
            })
        } catch (error) {
            console.log(error, "error");

        }
    },
    logout: async (req, res) => {
        try {
            const logout = await userModel.findByIdAndUpdate({
                _id: req.user._id
            }, { logintime: 0 }, { new: true })
            if (!logout) {
                return res.json({
                    message: "you are already logout",
                    status: 400,
                    body: {}
                })
            } else {
                return res.json({
                    message: "logout successfully",
                    status: 200,
                    body: logout
                })
            }
        } catch (error) {

        }
    }


}