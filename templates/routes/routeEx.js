const exampleRouter = require('express').Router()   //Tweak to taste.

//Import Controllers
const {getData} = require('../controllers/routeController')




//Routes
exampleRouter.get('/',getData)



module.exports = exampleRouter
