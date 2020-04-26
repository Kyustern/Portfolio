const apiRouter = require('./routes/index.js')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const chalk = require('chalk')
const path = require('path')
require('dotenv').config()

const port = process.env.PORT || 3001;
// const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/build'))

app.use('/api', apiRouter)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, function () {
    console.log('Server listening on ' + port)
})