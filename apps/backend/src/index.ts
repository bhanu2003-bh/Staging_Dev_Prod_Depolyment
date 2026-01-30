import express from "express";
import prisma from "@repo/prisma/client"
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());

app.get('/home',(req,res)=>{
  res.status(200).json({
    "message" : "Welcome to home page",
  })
})

app.post('/signup',async(req,res)=>{
  console.log("Aaya");
    const email = req.body?.email;
    const password = req.body?.password;
    const name = req.body?.name;
    console.log("email:",email," password:",password," name:",name);
    
  try {
      const response = await prisma.user.create({
        'data' : {
             'email' : email,
            'name' : name,
            'password' : password
        }
    })

    res.status(200).json({
        'message' : "User Added"
    })

  } catch (error) {
    console.log("Error:",error);
     res.status(400).json({
        'message' : "User not added"
     })
  }


})

app.listen(3002,()=>{
    console.log("Listing at 3000...")
})