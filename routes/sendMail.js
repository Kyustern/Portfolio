const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const chalk = require('chalk')
require('dotenv').config()

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

router.post('/sendMail', (req, res) => {
    const {text, from, first, last} = req.body
    const finalString =
//this is not indented because tabs are rendered in the string result
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

module.exports = router