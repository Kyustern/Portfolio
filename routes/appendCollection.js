require('dotenv').config()

const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const mongoUri = `mongodb+srv://${process.env.ATLAS_READONLY_USERNAME}:${process.env.ATLAS_READONLY_PASSWORD}@iprefermysql-nzjl9.mongodb.net/test?retryWrites=true&w=majority`

router.post('/appendCollection', (req, res) => {
    // const document = req.body
    //will append either the projects or the experience collection

})

module.exports = router