
const subCategoryModel = require("../Model/subcategoryModel")
const { Validator } = require("node-input-validator")
const { imageupload, checkValidation } = require("../helper/helper")

module.exports = {
    addSubCategory: async (req, res) => {
        try {

            const v = new Validator(req.body, {
                name: "required",
                categoryId: "required",
            })
            let errorResponse = await checkValidation(v)
            console.log(errorResponse, "rrrrrrrrrrrr");
            if (errorResponse) {
                return res.json({
                    success: false,
                    status: 404,
                    message: errorResponse,
                    body: {}
                })
            }


            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }
            const data = await subCategoryModel.create({
                name: req.body.name, image: req.body.image,
                categoryId: req.body.categoryId
            })
            return res.json({
                success: true,
                status: 200,
                message: "add data",
                body: data
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    findSubCategory: async (req, res) => {
        try {
            const data = await subCategoryModel.find().populate("categoryId")

            return res.json({
                success: true,
                status: 200,
                message: "find data",
                body: data
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    findSingleSubCategory: async (req, res) => {
        try {
            const data = await subCategoryModel.findById({
                _id: req.params.id
            })

            return res.json({
                success: true,
                status: 200,
                message: "find Single Data ",
                body: data
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    updateSubCategory: async (req, res) => {
        try {
            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }

            const data = await subCategoryModel.findByIdAndUpdate({
                _id: req.params.id
            }, { name: req.body.name, image: req.body.image }, { new: true })

            return res.json({
                success: true,
                status: 200,
                message: " updated Data ",
                body: data
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },

    deleteSubCategory: async (req, res) => {
        try {
            const data = await subCategoryModel.findByIdAndDelete({
                _id: req.params.id
            }, { new: true })

            return res.json({
                success: true,
                status: 200,
                message: " delete  Data ",
                body: data
            })
        } catch (error) {
            return res.json({
                success: false,
                status: 400,
                message: "error",
            })
        }
    },
}