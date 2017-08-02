const express = require('express');
let app = express();

const bodyParser = require('body-parser');

// ... your other express middleware like body-parser

let agenda = require('./lib/agenda');
const Agendash = require('agendash');

// or provide your own mongo client:
// var agenda = new Agenda({mongo: myMongoClient})

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

agenda.define('hello', (job, done) => {
    console.log('wow');
    done();
})

agenda.define('hello1', (job, done) => {
    console.log('wow1');
    done();
})


agenda.define('hello2', (job, done) => {
    console.log('wow2');
    done();
})

agenda.define('hello3', (job, done) => {
    console.log('wow3');
    done();
})


agenda.define('test', (job, done) => {
  setTimeout(() => {
    console.log('hellooooooo');
    job.save();
    done();
  }, 10000)
})

app.use('/dash', Agendash(agenda));

app.get('/test', (req ,res) => {

  agenda.schedule('in 40 seconds', 'hello');
  agenda.schedule('in 40 seconds', 'hello1');
  agenda.schedule('in 40 seconds', 'hello2');
  agenda.schedule('in 40 seconds', 'hello3');

  agenda.now('test');

  res.status(200).send('hello');
})

app.post('/sendEmail', (req, res) => {
  var taskRes = null;
  var x = agenda.now('sendEmail', {email: req.body.email, taskRes: taskRes});
  // console.log(JSON.stringify(x));
})

app.listen(process.argv[2], () => {
  console.log('server started!');
})
