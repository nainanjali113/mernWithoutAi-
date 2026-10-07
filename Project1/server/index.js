import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { routes } from './src/routes/mainRouter.js'
import { rateLimit } from 'express-rate-limit'

dotenv.config({quiet:true})

const app = express()
const port = 2020

app.use(express.json())
app.use(cors())

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
    // store: ... , 
})

app.use(limiter)

mongoose.connect(process.env.Atlas_URL)
    .then(() => console.log('Database is connected'))
    .catch((err) => console.log(err.message))

app.use('/api', routes)

app.listen(port, () => console.log(`Server is running on -http://localhost:${port}`))

