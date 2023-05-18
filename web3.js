const http = require('http')
const port = process.env.PORT || 3001;
const fs = require('fs')


const server = http.createServer((req, res) => {
    switch(req.url){
        case '/':
            fs.readFile("index.html", (err, data) => {
                if (!err){
                    res.write(data)
                    res.end()
                }
            })
            break
         case '/hanoi':
            fs.readFile("hanoi.html", (err, data) => {
                if (!err){
                    res.write(data)
                    res.end()
                }
             })
             break
        case '/danang':
            fs.readFile("danang.html", (err, data) => {
                if (!err){
                    res.write(data)
                    res.end()
                }
            })
            break
        case '/cantho':
            fs.readFile("cantho.html", (err, data) => {
                if (!err){
                    res.write(data)
                    res.end()
                }
            })
            break
        case '/hochiminh':
            fs.readFile("hochiminh.html", (err, data) => {
                if (!err){
                    res.write(data)
                    res.end()
                }
            })
            break
        default:
            fs.readFile("404.html", (err, data) => {
                if (!err){
                    res.write(data)
                    res.end()
                }
            })
            break
    }
})
server.listen(port, () => {
console.log("Web is runing at http://localhost:" + port)
})