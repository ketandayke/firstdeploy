require('dotenv').config();
const express= require('express');
const app = express();
const PORT=process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("hi this is ketan");
});

app.get('/profile',(req,res)=>{
    res.json({
        name:"ketan",
        cgpa:8.54,
        rollno:4,
        address:"Tirmahu"
    });
});

app.get('/hobby',(req,res)=>{
    res.send("<h1> ketan has hobbies cricket</h1>");
});

app.listen(PORT,()=>{
    console.log("server is live on ",PORT);
});