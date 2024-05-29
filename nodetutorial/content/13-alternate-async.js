
const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile)

//use promises async await instead of looping callbacks

// const getText = (path) => {
//     return new Promise ((resolve, reject) => {
//         readFile(path, 'utf-8', (err, res) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(res)
//             }
//         })
//     })
// }

const output = async () => {
    
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')

        await writeFile(
            './content/result-async.txt',
            `Here is merged text from both files ${first}, ${second}`,
            {flag: 'a'},
            (err, result) =>{
                if(err) {
                    console.log(err)
                }
                console.log(result);
            })
    } catch (error) {
        console.log(error)
    }
    
}

output();