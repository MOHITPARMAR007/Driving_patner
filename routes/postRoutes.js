const express = require("express");
const Post = require("../models/post.model");
const User = require("../models/user.model");

const router = express.Router();

// Create Post
router.post("/create", async (req, res) => {
  try {
    const {
      userId,
      username,
      vehicleName,
      availableSeats,
      travelFrom,
      travelTo,
      contactNumber,
      males,
      females,
      travelDate,
    } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Create post
    const newPost = new Post({
      user: user._id,
      username,
      vehicleName,
      availableSeats,
      travelFrom,
      travelTo,
      contactNumber,
      males,
      females,
      travelDate,
    });

    await newPost.save();
    return res.status(201).json({ msg: "Post created successfully", newPost , id : newPost._id});

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// Get All Posts
router.get("/all", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "email");
    return res.json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params; 
    const post = await Post.findById(id).populate("user", "email");

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    return res.json({ post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
