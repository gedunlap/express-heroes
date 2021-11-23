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

const HeroesSchema = new mongoose.Schema({
    hero: String,
    name: String,
    img: String
})

const Heroes = mongoose.model('Heroes', HeroesSchema)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Avengers Assemble!")
})

app.get('/heroes', async (req, res) => {
    try{
        res.json(await Heroes.find({}))
    }catch (error){
        res.status(400).json(error)
    }
})

app.post('/heroes', async (req, res) => {
    try{
        res.json(await Heroes.create(req.body))
    }catch (error){
        res.status(400).json(error)
    }
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))