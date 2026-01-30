import { WebSocketServer } from "ws";
import dotenv from "dotenv";
dotenv.config();


import prisma from "@repo/prisma/client"
const wss = new WebSocketServer({
    port : 3001
});


wss.on("connection",async(socket)=>{

const response = await prisma.user.create({
    'data' : {
        'email' : Math.random().toString(),
        "name" : Math.random().toString(),
        "password" : Math.random().toString()
    }
})
console.log("response",response);

socket.send("Welcome User ")

})