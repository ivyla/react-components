const http = require("http")
const express = require("express")
const app = express()
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    },
    {
        id: 4,
        content: "GET and POST are the most best methods of Lil Yachtffdsdsdfy",
        date: "2019-66-30T19:20:14.298Z",
        important: true
    }
]

// Route 1
app.get("/", (request, response) => {
    response.send("<h1> Hello world! </h1>")
})

// // Route 2
// app.get("/api/notes/:id", (request, response) => {
//     const id = request.params.id
//     const note = notes.find((note) => note.id === id)
//     console.log(note)
//     response.json(note)
// })

app.get("/api/notes/:id", (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find((note) => {
        return note.id === id
    })
    console.log(note)
    response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
