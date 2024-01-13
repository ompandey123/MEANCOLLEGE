const mongoose = require("mongoose");
const qualificationSchema = mongoose.Schema({
    qualification_name: String
});

const Qualification = mongoose.model("qualification", qualificationSchema, "qualifications");

module.exports = Qualification;