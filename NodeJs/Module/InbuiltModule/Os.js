const os = require('os')
console.log('Architecture',os.arch())
console.log('Architecture',os.platform())
console.log('Release : ',os.release())
console.log('Release : ',os.tmpdir())
console.log('Type : ',os.type())
console.log('TotalMem : ',os.totalmem())
console.log('Version : ',os.version())