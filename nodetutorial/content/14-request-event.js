const EventEmitter = require('events')
//to listen or emit events EventEmitter class is used


const customEvent = new EventEmitter();

customEvent.on('response', () =>{
    console.log("Without any parameter also works")
})


//If you dont pass parameter here, it will print undefined in place of variables
customEvent.on('response', (name, id) =>{
    console.log(`With paramets also works. name is ${name}, id is ${id}`)
})

customEvent.emit('response', 'Jai', 21)