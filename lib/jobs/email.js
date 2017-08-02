const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', port: 465, secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: 'moar.ahmed@gmail.com',
    pass: 'blabla'
  }
});

let mailOptions = (email) => {
  return {
    from: '"Omar 👻" <omar@hello.com>', // sender address
    to: email, // list of receivers
    subject: 'Hi', // Subject line
    text: 'Hello world?', // plain text body
    html: '<h1>Hello world?</h1>' // html body
  };
}

module.exports = function(agenda) {
  agenda.define('sendEmail', (job, done) => {
    console.log('hello');
    // const res = job.attrs.data.res;
    // transporter.sendMail(mailOptions(job.attrs.data.email), (error, info) => {
    //   if (error){
    //     job.fail(error);
    //     // res.status(500).send(error);
    //   }
    //   else {
    //     console.log('Message %s sent: %s', info.messageId, info.response);
    //     // res.send('success! ' + info.response);
    //   }
    //   done();
    //   console.log('finally :/');
    // });
  } );

agenda.define('woah', (job, done) => {
  console.log('yo maaan');
  done();
})

// More email related jobs
}
