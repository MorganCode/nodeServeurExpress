var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yourRecipe', (req, res) => {

const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
    let mailOptions = {
        from: '"mamieCookie" <mamiecookie@yopmail.com>',
        to: 'supergrandma@yopmail.com',
        subject: 'Recette cookie',
        text: 'Tes cookieees !',
        html: '<b>Tes cookiesss !</b>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});

res.send('ok!');
});

module.exports = router;