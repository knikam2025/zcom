import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import router from "./routes/authRoute.js"

//configer env
dotenv.config();

//rest object 
const app = express();

//database config

connectDB();


//

//middleware
app.use(express.json());
app.use(morgan("dev"));

// const
const port = process.env.PORT || 8080;

// routes

app.use('/api/v1/auth', router)


// rest api
app.get("/", (req, res)=>{
    res.send("<h1>welcome hello page</h1>")
})

//app listen run

app.listen(port, ()=>{
    console.log(`server is ${process.env.MODE} working ${port}`.bgGreen
)
});









