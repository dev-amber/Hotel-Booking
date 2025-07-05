import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String, // Clerk provides string _id (userId), not ObjectId
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // optional but helpful
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "hotelOwner"],
      default: "user",
    },
    recentSearchedCities: {
      type: [String], // array of strings
      default: [], // provide default to avoid validation errors
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
