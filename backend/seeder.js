// dependency
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

// seed data
import users from './data/users.js'
import products from './data/products.js'

// Model 
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

// initialization of dotenv
dotenv.config()

// connect to mongo atlas
connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported'.green.inverse)
        process.exit()
    }
    catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed'.red.inverse)
        process.exit()
    }
    catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

// argv[2]   node backend/seeder '-d' <------ 2nd command argument
if(process.argv[2] === '-d'){ 
    destroyData()
}
else{
    importData()
}