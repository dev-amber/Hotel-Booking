import User from "../models/User.js";

import { getAuth } from "@clerk/express";

export const protect = async (req, res, next) => {
  const { userId } = getAuth(req);  // <--- Get from JWT
  console.log("✅ userId from token:", userId);

  if (!userId) {
    return res.status(401).json({ success: false, message: "Not authenticated" });
  }

  const user = await User.findById(userId);  // _id must match Clerk userId
  req.user = user;
  next();
};
