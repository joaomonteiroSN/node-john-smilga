const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") res.end("This is the home page")
    if (req.url === "/about") {
        res.write(`<a href="/">To home</a>`)
        res.end("This is the page about the secrets")
    }
})

server.listen(5000)