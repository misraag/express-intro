const path = require('path')

//platform specific separator
console.log(path.sep)

//join
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

//basename
const base = path.basename(filepath)
console.log(base)

//**ABSOLUTE PATH */
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)