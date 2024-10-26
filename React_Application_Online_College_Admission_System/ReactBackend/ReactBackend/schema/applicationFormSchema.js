const mongoose = require('mongoose');

const ApplicationFormSchema = new mongoose.Schema({
    name : String,
    gender : String,
    parentContact : String,
    studentCourse : String,
    electives : String,
    obtainedMarks : String,
    totalMarks : String,
});

module.exports = mongoose.model('applicationform' , ApplicationFormSchema);