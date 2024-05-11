import express from 'express'
import mongoose from 'mongoose'
import { PORT, mongoUrl } from './config.js'
import { Book } from './bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use("/books", booksRoute)
app.get("/", (req, res) => {
    console.log("Hi This is a get request")
    res.send("Hello World")
})
mongoose
    .connect(mongoUrl)
    .then(() => {
        console.log("connected successfully")
        app.listen(PORT, () => {
            console.log(`Server running on port no. :  ${PORT}`)
        })

    })
    .catch((e) => { console.log(`error encountered: ${e}`) });
