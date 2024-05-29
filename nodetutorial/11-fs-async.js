const { readFile, writeFile } =  require('fs')

//reading first file
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
    }
    const first = result;

    //reading second file
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
        }
        const second = result

        //now create new file
        writeFile(
            './content/result-async.txt',
            `Here is merged text from both files ${first}, ${second}`,
            {flag: 'a'},
            (err, result) =>{
                if(err) {
                    console.log(err)
                }
                console.log(result);
            })
    })
})