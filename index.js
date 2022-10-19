const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/routes')


var app = express(); 

app.use(express.json());


app.use("/assignment",routes)



app.use('/welcome', (req, res) => {
    res.send("<h2>Welcome To </h2><h1>   Blue Yoner 2022</h1><h2> Training Module.</h2>");
  });






var PORT = 8081;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

// connecting to a databse with mongoose library (mongoose.connect())
const uri = "mongodb+srv://MKK9313:MKK9313@cluster0.weeu8ok.mongodb.net/learnersNodeJs_Ass?retryWrites=true&w=majority"
mongoose.connect(
    uri,{
        useNewUrlParser:true
    }).then( () => {
        console.log("Database Connected");

    }).catch(
        (err)=>{
            console.log(err);
        }
    )
