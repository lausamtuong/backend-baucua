const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const cors =require("cors")
const app = express()
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

app.use(express.json())
app.use(cors())
app.use(cookieParser())
dotenv.config()
const PORT = 30000
const server = app.listen(PORT,() => {
    console.log(`Listening on PORT: ${PORT}`)
})
mongoose.connect(process.env.URL_MONGODB,()=>{
    console.log("Connected to DB")
})
app.use('/',authRoute)
app.use('/main',userRoute)
