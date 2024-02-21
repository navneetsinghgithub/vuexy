const cms = require("../Model/CmsModel")

module.exports = {
    createCms: async (req, res) => {
        try {
            const data = await cms.create({
                title: req.body.title, content: req.body.content, type: req.body.type
            })
            return res.json({
                success: true,
                status: 200,
                message: "create cms",
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

    findSingleCms: async (req, res) => {
        try {
            const data = await cms.findOne({
                type: req.body.type
            })
            return res.json({
                success: true,
                status: 200,
                message: "find single Cms ",
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

    updateCms: async (req, res) => {
        try {
            const data = await cms.findOneAndUpdate({
                type: req.body.type
            }, { title: req.body.title, content: req.body.content }, { new: true })

            return res.json({
                success: true,
                status: 200,
                message: "update  Cms  ",
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