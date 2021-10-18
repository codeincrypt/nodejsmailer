const db = require('../util/db')
require('dotenv').config();
const fetch = require('node-fetch')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const moment = require('moment-timezone');

moment().tz("Asia/Calcutta").format();
process.env.TZ = 'Asia/Calcutta';


const SendMailToUser = (tomail, subject, message) => {
    const transporter = nodemailer.createTransport(smtpTransport({
        host:process.env.MAIL_HOST,
        secureConnection: false,
        tls: {
            rejectUnauthorized: false
        },
        port: 587,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        }
    }));

    const mailOptions = {
        from: `"Your Name" ${process.env.MAIL_FROM}`, // sender address
        to: tomail, // list of receivers
        subject: subject, // Subject line
        text: subject, // plain text body
        html: '<h1>'+message+'</h1>',
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Error in sending mail ::', error);
        } else {
            console.log('Email sent: ' + JSON.stringify(info, null, 2));
        }
    });
}

module.exports = SendMailToUser