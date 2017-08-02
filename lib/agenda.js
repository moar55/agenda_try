const Agenda = require('agenda');

let agenda = new Agenda({db: {address: 'mongodb://localhost/agendaDb'}});

// agenda.defaultLockLifetime(10000);

agenda.on('ready', () => {
    agenda.start();
  require('./jobs/email')(agenda);
})

module.exports = agenda;
