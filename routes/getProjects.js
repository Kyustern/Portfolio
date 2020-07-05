const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const chalk = require('chalk')
require('dotenv').config()

const mongoUri = `mongodb+srv://${process.env.ATLAS_READONLY_USERNAME}:${process.env.ATLAS_READONLY_PASSWORD}@iprefermysql-nzjl9.mongodb.net/test?retryWrites=true&w=majority`

router.get('/getProjects', (req, res) => {

    const mongoClient = new MongoClient(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        mongoClient.connect(async (err) => {
            if (err) { console.log(err) }

            const data = await mongoClient.db('portfolio').collection('projets').find().toArray()

            mongoClient.close().then(() => {
                res.send(data)
            })
        })
    } catch (error) {
        console.log("error", error)
        res.status(500)
        res.send(error)
    }

})

module.exports = router