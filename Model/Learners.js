// need to install: npm install mongoose (npm i mongoose)
const mongoose = require('mongoose');

// Creating a Schema on type of data communicating to mongodb
const LearnerSchema = new mongoose.Schema({
    learner_name:{type:String,required:true},
    learner_email:{type:String,required:true},
    learner_password:{type:String,required:true}
})


module.exports = mongoose.model("Learners",LearnerSchema)