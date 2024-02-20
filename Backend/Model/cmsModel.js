const mongoose = require("mongoose")
const cmsSchema = new mongoose.Schema({
    title:
        { type: String },
    content:
        { type: String },
    type:
        { type: Number }  //1 = privacy , 2 = term condition  , 3 = about us //
})

const cms = mongoose.model("cms", cmsSchema)
module.exports = cms