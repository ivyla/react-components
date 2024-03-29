const http = require("http")
// This gives us the file handling
const fs = require("fs")
const port = 3000

const server = http.createServer(function (req, res) {
    // We're writing what goes into the header
    // -- the browser needs this information to be able to know what to render into the browser
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("index.html", function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write("Error: File not found")
        } else {
            res.write(data)
        }
        res.end()
    })
    // res.write("Hello Node")
})

server.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong: ", error)
    } else {
        console.log("Server is listening on port: ", port)
    }
})
