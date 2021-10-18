const express = require('express');
const SendMailToUser = require('./email/mail');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Kartik Swarnkar Node js Mail');
})

app.get('/sendMail', (req, res) => {
  var tomail = 'to@gmail.com', 
  var subject = 'Hello This is mail subject', 
  var message = 'This is a message of node mailer. Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, rerum aspernatur inventore laboriosam quas id, illum dicta vel accusamus, quod consequuntur doloribus sint dolorem iste. Beatae ducimus possimus repudiandae iure.'
  SendMailToUser(tomail, subject, message);
})

app.listen(PORT, () => {
  console.log('Kartik Swarnkar Node js Mail App running on port -', PORT)
})