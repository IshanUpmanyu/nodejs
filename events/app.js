const EventEmitter = require('events');
const emitter = new EventEmitter();

//Event without arguments
//Register a listner
emitter.on('messageLogged', function(){
  console.log('Listner called!')
})

//Raise an event
emitter.emit('messageLogged');

//event with arguments

emitter.on('messageLoggedWithArgs', function(arg){
  console.log(`Listener called with arguments: id=${arg.id}, url=${arg.url}`)
});


//Raise an event
emitter.emit('messageLoggedWithArgs', {id: 1, url: 'http://'});
