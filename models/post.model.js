const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  vehicleName: {
    type: String,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  travelFrom: {
    type: String,
    required: true,
  },
  travelTo: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  males: {
    type: Number,
    default: 0,
  },
  females: {
    type: Number,
    default: 0,
  },
  travelDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
