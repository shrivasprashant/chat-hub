import express from "express"
// const app = express()
import dotenv from "dotenv"
import cors from "cors"
import  connectDatabase  from "./config/database.js"
import userRoutes from "./routes/userRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import cookieParser from "cookie-parser"
import { server , app } from "./socket/Soket.js"

dotenv.config({})
const port = process.env.port || 5000

// logger
import logger from "morgan"
app.use(logger("tiny"))

// use for network access
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use for create session
app.use(cookieParser())


// routes handling
app.use("/users", userRoutes)
app.use("/message", messageRoutes)


// error handling
import ErrorHandler from "./utils/ErrorHandler.js"
app.all("*",(req,res,next)=> {
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`,404))
})


// middlewares/error.js
import { generatedError } from "./middleware/error.js"
app.use(generatedError)


server.listen(port, () => {
    connectDatabase()
    console.log(`server listen at port  ${port}`);
}) 