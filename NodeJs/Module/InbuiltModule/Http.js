const http = require('http')

http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/login'){
        res.write("Login")
    }
    if(req.url === '/users'){
        res.write("Users")
    }
    
    res.end()

}).listen(3000)
//console.log(http)

