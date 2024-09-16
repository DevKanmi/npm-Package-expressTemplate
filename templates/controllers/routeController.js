//The event handlers of routes are commonly referred to as controllers

//Import Models
const ModelName = require('../models/exampleSchema') //Edit ModelName


const getData = async (request, response) => {
    try {
        // Your logic here. For example, fetching data from a database.
        response.json('Hello This is a Beginner Friendly Template for Building projects using Express, Goodluck!!'); // Respond with the fetched data in JSON format
    } catch (error) {
        console.error('Error fetching data:', error);
        response.status(500).send('Internal Server Error');
    }
}
 // DELETE IF IT IS NOT USEFUL


module.exports = {getData}