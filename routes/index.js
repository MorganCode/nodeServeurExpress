var express = require('express');
var router = express.Router();

const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
  service: "Gmail",
  auth: {
      user: "gmail.user@gmail.com",
      pass: "userpass"
  }
});

smtpTransport.sendMail({
  from: "Deer Wild <deer@wild.com>", // Expediteur
  to: "contact@wild.com, contact@school.com", // Destinataires
  subject: "Coucou !", // Sujet
  text: "Hello world ✔", // plaintext body
  html: "<b>Hello world ✔</b>" // html body
}, (error, response) => {
  if(error){
      console.log(error);
  }else{
      console.log("Message sent: " + response.message);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST with GET parameters */

router.post("/forms-:formNumbers(\\d+)", function(req, res, next) {
  res.send(console.log(`Paramètre d'URL: ${req.params.formNumbers} Contenu du GET: ${req.query.level} Contenu du POST: ${req.body.inputContent}`))
})

module.exports = router;
