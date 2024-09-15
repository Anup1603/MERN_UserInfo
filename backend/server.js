const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/connectDB")
const userRouter = require("./routes/userRoute")
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// middle-ware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// router
app.get("/", (req, res) => {
    res.send("<h1>Server Started successfully...</h1>")
});

app.use("/api/users", userRouter);


const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server connected successfully @ http://localhost:${PORT}/api/users/all`);
        });
    } catch (err) {
        console.log(`ERROR: ${err.message}`);
    }
};

startServer();
