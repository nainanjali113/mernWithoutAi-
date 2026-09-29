import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { routes } from './src/routes/mainRouter.js'

dotenv.config()

const app = express()
const port = 2020

app.use(express.json())
app.use(cors())

mongoose.connect('')
    .then(() => console.log('Database is connected'))
    .catch((err) => console.log(err.message))

app.use('/anjani', routes)

app.listen(port, () => console.log(`Server is running on -http://localhost:${port}`))

