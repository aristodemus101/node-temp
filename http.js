const http = require("http")

const server = http.createServer((req,res) => {
    console.log(req)
    if(req.url == "/"){
        res.end("Welcomet")
    }
    if(req.url == "/home"){
        res.end("Home page")
    }

    res.end(`<H1> Oops! </H1>`)
})

server.listen(5000)