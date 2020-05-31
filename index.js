//Routes import
const getProjects = require('./routes/getProjects')
const sendMail = require('./routes/sendMail')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api', getProjects)
app.use('/api', sendMail)

//Static folder that contains the react build
app.use(express.static(__dirname + '/client/build'))
//Static folder that contains the images for the projects
app.use(express.static(__dirname + '/public'))

//Serving the build on any request (*)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, function () {
    console.log('Server listening on ' + port)
})