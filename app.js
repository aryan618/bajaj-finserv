const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.status(200).send(`Hello server this side`);
})

app.post('/bhfl',(req,res)=>{
    const data=req.body.data;
    console.log(data);
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

app.listen(5000, () => {
    console.log("listening on port 5000");
  });