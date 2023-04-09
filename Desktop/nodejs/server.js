const http = require("http")



const server = http.createServer((req,res)=>{
    console.log(res)
    res.write('welcome')
})

server.listen(5000)