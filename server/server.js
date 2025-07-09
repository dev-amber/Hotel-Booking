import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDb from "./configs/db.js"
import { clerkMiddleware,getAuth
 } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"
import userRouter from "./routes/userRoutes.js"
import hotelRouter from "./routes/hotelRoutes.js"
import connectCloudinary from "./configs/cloudinary.js"
import roomRouter from "./routes/roomRoutes.js"
import bookingRouter from "./routes/bookingRoutes.js"



connectDb()
connectCloudinary()

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
// ROUTES
app.use("/api/user", userRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/rooms", roomRouter)
app.use("/api/bookings", bookingRouter)








const PORT=process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`) );