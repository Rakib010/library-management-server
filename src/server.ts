import express from 'express'
import mongoose from 'mongoose'
import config from './config'
import booksRoute from './modules/book/book.routes'
import borrowRoute from './modules/borrow/borrow.route'


const app = express()

//middlewares
app.use(express.json())
app.use(booksRoute)
app.use(borrowRoute)



app.get('/', (req, res) => {
    res.send('Library Management Server is Running')
})

app.listen(config.port, () => {
    console.log(`Library Management Server listening on port ${config.port}`)
})

async function server() {
    try {
        await mongoose.connect(config.database_url as string)
        console.log("Connect to database")
    } catch (error) {
        console.error("Server Error:", error)
    }
}

server()

