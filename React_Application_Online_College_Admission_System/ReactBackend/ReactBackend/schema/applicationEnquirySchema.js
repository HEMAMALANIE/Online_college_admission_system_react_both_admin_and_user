const mongoose = require('mongoose');

const ApplicationEnquirySchema = new mongoose.Schema({
    
    student_name : String,
    student_email : String,
    student_mobile : String,
    student_location : String,
    student_scl_name : String,
    student_maths : String,
    student_physics : String,
    student_chemistry : String,
    student_course : String,
    student_marks : String,
    student_cutoff: String,
    date : String,

    status : {type : Boolean , default : false}
});

module.exports = mongoose.model('applicationenquiry' , ApplicationEnquirySchema);