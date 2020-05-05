const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const chalk = require('chalk')
require('dotenv').config()

const mongoUri = `mongodb+srv://${process.env.ATLAS_ADMIN_USERNAME}:${process.env.ATLAS_ADMIN_PASSWORD}@iprefermysql-nzjl9.mongodb.net/test?retryWrites=true&w=majority`

const client = new MongoClient(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



router.get('/createProject', (req, res) => {

    client.connect(err => {
        const collection = client.db("portfolio").collection("projets");
        // perform actions on the collection object

        Object.values(data).map(async (projectObject, index) => {
            console.clear()
            console.log(chalk.bgRed(index));
            console.log(projectObject);
            await collection.insertOne(projectObject, (err, result) => {
                console.assert(!err, (err))
                console.assert(!result, result)
            })
        })

        if (err) {
            console.log(err);
            res.sendStatus(500)
        }

        setTimeout(() => {
            res.send('all gud fam')
            console.log('all gud fam')
        }, 1000)
    });

    client.close();


})

module.exports = router