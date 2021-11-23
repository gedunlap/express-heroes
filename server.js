require('dotenv').config()
const { PORT = 3000, DATABASE_URL } = process.env
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

mongoose.connect (DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
})

mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

app.get('/', (req, res) => {
    res.send("Avengers Assemble!")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))