const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', function(arg){
  console.log('Listner called: '+ arg.msg);
});

logger.log('Hi Ishan!')
