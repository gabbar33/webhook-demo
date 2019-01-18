const log4js = require('log4js');
log4js.configure({
  appenders: {
    app: { type: 'file', filename: './logs/debug.log', maxLogSize: 10485760, backups: 3, },
    error: {  type: 'file', filename: './logs/error.log' , maxLogSize: 10485760, backups: 3,},
    'errors': { type: 'logLevelFilter', appender: 'error', level: 'error' }
  },
  categories: {
    default: { appenders: ['app'], level: 'debug'},
    error: {appenders: ['errors'], level: 'debug'}
   }
});

module.exports = log4js;
