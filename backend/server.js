import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

// Product router
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

// Middlewares
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running....')
})

// all of the product related apis
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// middleware for no matching url request
app.use(notFound)

// error middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV 

app.listen(PORT, console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold))