const categoryModel = require("../Model/categoryModel")
const {imageupload} = require("../helper/helper")

module.exports = {
    createCategory: async (req, res) => {
        try {

            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }
            const data = await categoryModel.create({
                name: req.body.name, image: req.body.image
            })
            return res.json({
                message: "add data",
                status: 200,
                body: data
            })
        } catch (error) {
            // console.log(error, "error");
        }
    },

    findCategory: async (req, res) => {
        try {
            const data = await categoryModel.find()
          
            return res.json({
                message: "find data",
                status: 200,
                body: data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },

    findSingleCategory: async (req, res) => {
        try {
            const data = await categoryModel.findById({
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
    updateCategory: async (req, res) => {
        try {
            const data = await categoryModel.findByIdAndUpdate({
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

    deleteCategory: async (req, res) => {
        try {
            const data = await categoryModel.findByIdAndDelete({
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