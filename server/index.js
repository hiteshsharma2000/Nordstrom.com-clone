const express=require('express');
require("dotenv").config()
const app=express();
const port =process.env.PORT



app.use(express.json());



app.get('/',(req,res)=>{
    try {
        res.status(200).json({msg:"welcome you are on Home page"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.listen(port,async (req,res)=>{
    try {
        console.log(`your server is running on port ${port}`);
    } catch (error) {
        console.log(error.message)
    }
})