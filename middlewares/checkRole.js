require('dotenv').config()

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.OAUTH_BACK_ID);
const MongoClient = require('mongodb').MongoClient

const mongoUri = `mongodb+srv://${process.env.ATLAS_READONLY_USERNAME}:${process.env.ATLAS_READONLY_PASSWORD}@iprefermysql-nzjl9.mongodb.net/test?retryWrites=true&w=majority`

const isAdmin = async function (req, res, next) {

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
                    console.log('append res.locals');
                    res.locals.role = "god"
                    next()
                } else {
                    res.locals.role = "peasant"
                    res.status(403).send('Unauthorized')
                }

            })
            .catch((err) => {
                console.log("err", err)
                res.status(500).send({ errorCode: 'Authentication failed, couldnt verify id_token' })
            })
    } else {
        res.locals.role = "inconnu au bataillon"
        res.status(403).send('Not logged in')
    }
};

// const teub = async (googleId) => {

//     const mongoClient = new MongoClient(mongoUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

//     try {
//         await mongoClient.connect()
//         const alreadyExist = await mongoClient.db('portfolio').collection('registeredUsers').find({ gID: googleId }).toArray()
//         console.log("fetchDb -> alreadyExist", alreadyExist)
//     } catch (error) {
//         console.log("fetchDb -> error", error)
//     }
// }

// const fetchDb = new Promise(
//     async (resolve, reject) => {
//         const mongoClient = new MongoClient(mongoUri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         try {
//             await mongoClient.connect()
//             const alreadyExist = await mongoClient.db('portfolio').collection('registeredUsers').find({ gID: googleId }).toArray()
//             resolve(alreadyExist)
//         } catch (err) {
//             reject(err)
//         } 
//     }
// )


module.exports = isAdmin