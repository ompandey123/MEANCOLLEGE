const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
    username: String,
    password: String,
    qualification: String,
    image: String
});

const Employee = mongoose.model("employee", employeeSchema, "employees");

module.exports = Employee;