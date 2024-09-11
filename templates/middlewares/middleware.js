const logger = require('../utils/logger')

const requestLogger = (request, response, next) => {
  // Create Request Logger, DELETE IF NOT NEEDED

}



const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
    //TWEAK TO PREFERENCE
  }



  const errorHandler = (error, request, response, next) => {   //Common Errors Handled Here
    logger.error(error.message)
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
  
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
  
    } else if(error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')){
      return response.status(400).json({ error: 'expected `username` to be unique' })
    
    } else if(error.name === 'JsonwebTokenError'){
      return response.status(401).json({ error: 'token invalid' })
    
    } else if(error.name === 'TokenExpiredError'){ // IF there is an error with token return this
      return response.status(401).json({
        error: 'token expired'
      })
    }

    //TWEAK TO YOUR PREFERENCE.
    
    next(error)
}


module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}  