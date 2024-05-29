const http = require('http') 

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.end("Welcome to our home page")
    }
    if(req.url === '/about') {
        res.end("ABOUT PAGE")
    }
    res.end(`
    <h1>OOPS!</h1>
        <p>The page you are looking for does not exist!</p>
        <a href="/">Back to Home</a>
        `)
}) 

server.listen(5000)