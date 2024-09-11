const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')

const exampleRouter = require('./routes/routeEx')
const middleware = require('./middlewares/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

//ALL CAN BE USED BY RUNNING IN YOUR CL "npm install" to install all dependencies

//CREATE MONGOOSE/DB CONNECTION HERE

// mongoose.set('strictQuery', false)

// logger.info('connecting to', config.MONGODB_URI)

// async function DBconnecton () {
//     try{
//    await mongoose.connect(config.MONGODB_URI)
//    // here
//    logger.info('connected to MongoDB')
// }

// catch (error){
//     logger.error('Error connecting to MongoDB :', error.message)
// }
// }

// DBconnecton();


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())


app.use('/api/hello', exampleRouter)
//To use eg localhost:3001/api/hello/ "This fetches all entries in DB"


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app


//REMEMBER TO TWEAK TO PREFERENCE