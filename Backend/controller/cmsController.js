

const cms = require("../Model/CmsModel")


module.exports = {
    createCms: async (req, res) => {
        try {
            const data = await cms.create({
                title: req.body.title, content: req.body.content, type: req.body.type
            })
            return res.json({
                message: "create cms",
                status: 200,
                body: data
            })
        } catch (error) {

        }
    },

    findCms: async (req, res) => {
        try {
            const data = await cms.find()

            return res.json({
                message: "find Cms ",
                status: 200,
                body: data
            })
        } catch (error) {

        }
    },
    updateCms: async (req, res) => {
        try {
            const data = await cms.findByIdAndUpdate({
                _id: req.params.id
            }, { title: req.body.title, content: req.body.content }, { new: true })

            return res.json({
                message: "update  Cms  ",
                status: 200,
                body: data
            })
        } catch (error) {

        }
    },
}