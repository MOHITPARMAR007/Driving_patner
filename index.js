const express = require("express");
const userRouter = require("./routes/UserRouter"); 
const postRouter = require("./routes/postRoutes")
const connectDB = require('./models/config')
const app = express();

app.use(express.json());

app.use("/api/user", userRouter); 
app.use("/api/post", postRouter);
connectDB();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
