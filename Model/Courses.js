// need to install: npm install mongoose (npm i mongoose)
const mongoose = require('mongoose');

// Creating a Schema on type of data communicating to mongodb
const CourseSchema = new mongoose.Schema({
    course_id:{type:String,required:true},
    course_name:{type:String,required:true},
    course_description:{type:String,required:true}
})


module.exports = mongoose.model("courses",CourseSchema)