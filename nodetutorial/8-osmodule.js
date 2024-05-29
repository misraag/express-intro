const os = require('os')

//info about user
const user = os.userInfo();
console.log(user)

//info about the system uptime
console.log(`The system uptime is ${os.uptime()} seconds`);


//info about the os
const currentOS = {
    name: os.type(),
    version: os.version(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}

console.log(currentOS)