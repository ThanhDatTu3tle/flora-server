import express from 'express';

// middleware
import bodyParser from 'body-parser';
import cors from 'cors';    
import mongoose, { mongo } from 'mongoose';

// routes
import category from './routers/category.route.js';
import product from './routers/product.route.js';
import card from './routers/card.route.js';
import gift from './routers/gift.route.js';
import plant from './routers/plant.route.js';

const app = express()
const PORT = process.env.port || 5000
const URI = 'mongodb+srv://tu3tle:dat27032001@cluster0.qbrhhwe.mongodb.net/?retryWrites=true&w=majority'

// use middleware
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

// use routes
app.use('/category', category)
app.use('/product', product)
app.use('/card', card)
app.use('/gift', gift)
app.use('/plant', plant)

mongoose.set('strictQuery', false)
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to database!!!`)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }).catch(err => {
        console.log('Error!!!', err)
    })
