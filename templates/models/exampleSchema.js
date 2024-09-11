const mongoose = require('mongoose')

const ExampleSchema = new mongoose.Schema({
    //Create Schema field inside here.
})

module.exports = mongoose.model('Example', ExampleSchema)