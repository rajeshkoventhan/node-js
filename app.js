
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config")

app.use(express.json());
 
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);



app.get("/", (req, res) => {
    res.send("world");
  });


  mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true},
    

    (err)=>{
        if(!err)
    {
    
    console.log("db connected")
    }
    
    else
    {console.log(err)}
    
    })

 


app.listen(3000,()=>{
  console.log("world");
});