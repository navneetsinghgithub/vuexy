
const subCategoryModel = require("../Model/subcategoryModel")
const {imageupload} = require("../helper/helper")

module.exports = {
    addSubCategory: async (req, res) => {
        try {

            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }
            const data = await subCategoryModel.create({
                name: req.body.name, image: req.body.image,
                categoryId:req.body.categoryId
            })
            return res.json({
                message: "add data",
                status: 200,
                body: data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },

    findSubCategory: async (req, res) => {
        try {
            const data = await subCategoryModel.find()
          
            return res.json({
                message: "find data",
                status: 200,
                body: data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },

    findSingleSubCategory: async (req, res) => {
        try {
            const data = await subCategoryModel.findById({
                _id:req.params.id
            })
          
            return res.json({
                message: "find Single Data ",
                status: 200,
                body: data
            })
        } catch (error) {
            // console.log(error, "error");
        }
    },
    updateSubCategory: async (req, res) => {
        try {
            const data = await subCategoryModel.findByIdAndUpdate({
                _id:req.params.id
            },{name:req.body.name , image:req.body.image},{new:true})
          
            return res.json({
                message: " updated Data ",
                status: 200,
                body: data
            })
        } catch (error) {
            // console.log(error, "error");
        }
    },

    deleteSubCategory: async (req, res) => {
        try {
            const data = await subCategoryModel.findByIdAndDelete({
                _id:req.params.id
            },{new:true})
          
            return res.json({
                message: " delete  Data ",
                status: 200,
                body: data
            })
        } catch (error) {
            // console.log(error, "error");
        }
    },
}