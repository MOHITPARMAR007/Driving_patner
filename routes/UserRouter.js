const express = require("express");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const User = require('../models/user.model');
const { default: mongoose } = require("mongoose");
const router = express.Router();

// Define Zod Schema
const SignInBody = z.object({
    email: z.string().email(), // Validate as email
    password: z.string().min(6) // Require minimum length
});

router.post("/signin", async (req, res) => {
    try {
        const body = req.body; // Correct way to access request body

        // Validate request data
        const result = SignInBody.safeParse(body);
        if (!result.success) {
            return res.status(400).json({ msg: "Invalid input", errors: result.error.errors });
        }

        const { email, password } = result.data; // Extract validated data
        const existingUser =  await User.findOne({email})
        if(existingUser) return res.json({msg : "user already exists"})
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({email : email , password : hashedPassword})
        await newUser.save();
        return res.status(200).json({
            msg: "Everything went good",
            email,
            _id: newUser._id
        });

    } catch (error) {
        console.error("Error in /signin:", error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const body = req.body;
        const result = SignInBody.safeParse(body);

        if (!result.success) {
            return res.status(400).json({ msg: "Check the inputs", errors: result.error.errors });
        }

        const { email, password } = result.data;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Password does not match" });
        }

        return res.status(200).json({ msg: "Login successful", email: existingUser.email , userId : existingUser._id});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
});

module.exports = router;
