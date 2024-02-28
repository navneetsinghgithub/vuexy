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

    TermC: async (req, res) => {
        try {
            const data = await cms.findOne({
                type: 1
            })
            return res.json({
                success: true,
                status: 200,
                message: "find term & condition ",
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


    privacyP: async (req, res) => {
        try {
            const data = await cms.findOne({
                type: 2
            })
            return res.json({
                success: true,
                status: 200,
                message: "find privacy policy ",
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

    aboutUs: async (req, res) => {
        try {
            const data = await cms.findOne({
                type: 3
            })
            return res.json({
                success: true,
                status: 200,
                message: "find about us ",
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

    updateTermCms: async (req, res) => {
        try {
            const data = await cms.findOneAndUpdate({
                type: 1
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

    updatePrivacyCms: async (req, res) => {
        try {
            const data = await cms.findOneAndUpdate({
                type: 2
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

    updateAboutCms: async (req, res) => {
        try {
            const data = await cms.findOneAndUpdate({
                type: 3
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