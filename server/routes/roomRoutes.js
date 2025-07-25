import express from "express"
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { createRoom, getOwnerRooms, getRoom, toggleRoomAvailability } from "../controllers/roomController.js";

const roomRouter=express.Router()

roomRouter.post("/", upload.array("images", 4),protect, createRoom);
roomRouter.get("/", getRoom);
roomRouter.get("/owner",protect, getOwnerRooms);
roomRouter.post("/toggle-availability", protect, toggleRoomAvailability); // post use bcz send current status



export default roomRouter;