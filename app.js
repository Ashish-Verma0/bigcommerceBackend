const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const subscriptionRouter = require('./routes/subscription.routes');
const connectDB = require('./db/db');

app.use(express.json());
app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"],
}));

app.use(subscriptionRouter)

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer=async()=>{
    try {
        await connectDB()
        app.listen(4000, () => {
          console.log("Server is running on port 4000");
        }); 
    } catch (error) {
        console.log("Server error",error)
    }
}

startServer()