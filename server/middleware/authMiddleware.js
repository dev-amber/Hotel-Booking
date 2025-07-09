import { getAuth } from "@clerk/express";

export const protect = async (req, res, next) => {
  try {
    console.log("Authorization header:", req.headers.authorization); // Debug

    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "No userId found in token" });
    }

    const user = await User.findOne({ clerkUserId: userId }); // Use Clerk's ID
    if (!user) {
      return res.status(404).json({ error: "User not found in database" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};