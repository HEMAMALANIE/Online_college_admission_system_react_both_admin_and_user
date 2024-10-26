
const express = new require('express')
const router = express.Router()
const ApplicationForm = require('../schema/applicationFormSchema')
const ApplicationEnquiry = require('../schema/applicationEnquirySchema')
const UserAccounts = require('../schema/User')

router.get("/listApplicationForms" , async(req,res)=>{
    try {
        console.log("listApplicationForms")
        const applicationFormList = await ApplicationForm.find(); 
        res.send({ applicationFormList });
      } catch (err) {
        console.error("Error retrieving application forms:", err);
        res.status(500).send({ message: "Error retrieving forms" }); 
      }
})
router.get("/listApplicationEnquires" , async(req,res)=>{

    try {
        const applicationEnquiryList = await ApplicationEnquiry.find();
        res.send({ applicationEnquiryList });
      } catch (err) {
        console.error("Error retrieving application enquiries:", err);
        res.status(500).send({ message: "Error retrieving enquiries" });
      }

})
router.get("/listUserAccounts" , async(req,res)=>{

    try {
        const userAccounts = await UserAccounts.find();
        res.send({ userAccounts });
      } catch (err) {
        console.error("Error retrieving userAccounts:", err);
        res.status(500).send({ message: "Error retrieving userAccounts" });
      }

})

router.post("/submitApplicationForm" , async(req,res)=>{

    console.log("req.body = " , req.body)

    const { name, gender, parentContact, studentCourse, electives, obtainedMarks, totalMarks } = req.body;

    try {
        const newForm = new ApplicationForm({
            name, gender, parentContact, studentCourse, electives, obtainedMarks, totalMarks 
        });
    
        await newForm.save(); 
        res.send({ message: "Application form submitted successfully" });
      } catch (err) {
        console.error("Error saving application form:", err);
        res.status(500).send({ message: "Error submitting application form" });
      }
    console.log("sucess")

})

router.post("/submitApplicationEnquiry", async (req, res) => {
    console.log("Received POST request for /submitApplicationEnquiry");
  
    const { student_name, student_email, student_mobile, student_location, student_scl_name, student_maths, student_physics , student_chemistry , student_course } = req.body;

    let date = new Date().toLocaleDateString();

    let student_cutoff = parseFloat(student_maths) + (parseFloat(student_physics) + parseFloat(student_chemistry)) / 2;
  
    try {
      const newRegistration = new ApplicationEnquiry({
        student_name,
        student_email,
        student_mobile,
        student_location,
        student_scl_name,
        student_maths,
        student_physics,
        student_chemistry,
        student_course,
        student_cutoff,
        date
      });
  
      await newRegistration.save();
      res.send({ message: "Enquiry submitted successfully" });
    } catch (err) {
      console.error("Error saving enquiry:", err);
      res.status(500).send({ message: "Error submitting enquiry" }); 
    }
});


router.put('/updateEnquiryStatus/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const { status } = req.body;

      const updatedEnquiry = await ApplicationEnquiry.findByIdAndUpdate(id, { status }, { new: true });

      if (!updatedEnquiry) {
          return res.status(404).json({ message: 'Enquiry not found' });
      }

      res.status(200).json({ message: 'Status updated successfully', updatedEnquiry });
  } catch (error) {
      console.error('Error updating enquiry status:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;