require('dotenv').config()
const express = require('express')
const router = express.Router()
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.OAUTH_BACK_ID);
const MongoClient = require('mongodb').MongoClient

const mongoUri = `mongodb+srv://${process.env.ATLAS_READONLY_USERNAME}:${process.env.ATLAS_READONLY_PASSWORD}@iprefermysql-nzjl9.mongodb.net/test?retryWrites=true&w=majority`

router.post('/signin', (req, res) => {
    if (req.body.id_token) {
        const mongoClient = new MongoClient(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.OAUTH_CLIENT_ID
        })
            .then(async (verifiedToken) => {
                const sub = verifiedToken.getPayload().sub;
                console.log("sub", sub)
                await mongoClient.connect()
                const alreadyExist = await mongoClient.db('portfolio').collection('registeredUsers').find({ gID: sub }).hasNext()
                // .hasNext() check if the cursor has documents inside (better than .toArray().lenght)
                if (alreadyExist) {
                    res.send({role : "god"})
                } else {
                    res.send({role : "peasant"})
                }

            })
            .catch((err) => {
                console.log("err", err)
                res.status(500).send({ errorCode: 'Authentication failed, couldnt verify id_token' })
            })
    } else {
        res.send({role: "inconnu au bataillon"})
    }
})

module.exports = router