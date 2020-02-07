const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const chalk = require('chalk')
const path = require('path')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_ACCOUNT,
        pass: process.env.MAIL_PASSWORD
    }
})

let mailOptions = {
    from: process.env.MAIL_ACCOUNT,
    to: process.env.MAIL_UKNOWWHODIS,
    subject: 'From portfolio/contact',
    text: ''
}

app.post('/api/mailto', (req, res) => {

    const {text, from, first, last} = req.body
//this is not indented because tabs are rendered in the string result
    const finalString =
`${text}
Sent by ${first} ${last}
From ${from}`

    mailOptions.text = finalString
    
    mailTransporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(chalk.bgRed('Oof, an error ocured'));
            console.log(err);
            setTimeout(()=>{
                res.send({
                    text: `Une erreur est survenue ;_; Si le problème persiste, envoyez votre mail a l'addresse suivante : tescherleon@gmail.com`,
                    success: false
                })
            }, 3000)

        } else {
            console.log(info);
            setTimeout(() => {
                res.send({
                    text: `Mail envoyé avec succès :D`,
                    success: true
                })
            }, 3000)
        }
    })
})

//29janvier 10h30 -> cv, cni, carte vitale, carte de mutuelle, rib

app.listen(3001, function () {
    console.log('Server listening on port 3001')
})

//cni recto verso, carte vitale
//mail : toulouse.2@proman-interim.com