const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const port=process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.status(200).send(`Hello server this side`);
})

app.post('/bhfl',(req,res)=>{
    const data=req.body.data;
    console.log(data);
    if (!Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ error: 'Invalid or empty array provided in the request' });
    }
    let alpha=[];
    let nums=[];
    for(var i=0;i<data.length;i++){
        console.log(data[i]);
        if(!isNaN(data[i])){
            nums.push(data[i]);
        }
        else{
            alpha.push(data[i]);
        }
    }
    console.log(alpha);
    console.log(nums);
    let high="";
    if(alpha.length>0){
        high=alpha[0];
        for(var i=0;i<alpha.length;i++){
            if(alpha[i]>high){high=alpha[i]};
        }
    }
    console.log("high=",high);
    //res.status(200).send("received data");
    res.status(200).json({
        "is_success":true,
        "user_id":"ARYAN KUMAR SINGH",
        "email":"as2280@srmist.edu.in",
        "roll_number":"RA2011033010179",
        "numbers":nums,
        "alphabets":alpha,
        "highest":high,
    })
})

app.get('/bhfl',(req,res)=>{
    res.status(200).json({"operation_code":1});
})

app.use((req, res) => {
    res.status(404).send("404 URL NOT FOUND");
});

app.listen(port, () => {
    console.log("listening on port 5000");
  });