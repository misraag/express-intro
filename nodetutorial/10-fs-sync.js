
const { readFileSync, writeFileSync, read, write } = require('fs');

 const first = readFileSync('./content/first.txt', 'utf-8')
 const second = readFileSync('./content/second.txt', 'utf-8')


writeFileSync('./content/result-sync.txt', `Here is the merged text from both the files: ${first}, ${second}`, {flag:'a'})