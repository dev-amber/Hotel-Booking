import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDb from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"

connectDb()

const app=express()
app.use(cors()) 

//MIDDLEWARE CLERK
app.use(express.json())
app.use(clerkMiddleware())

// API to listen webhook
app.use("/api/clerk", clerkWebhooks)



app.get("/",(req,res)=>{
    res.send("API is working");
})





const PORT=process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`) );