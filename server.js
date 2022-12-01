const http =require ('http')
const PORT = 5000
const server = http.createServer ((req,res) => {
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>Hello, Node.js !</h1>")
    
    }else if (red.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>About page!</j1>')
        res.end()
    
    }else if (req.url === '/student') 
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>student page!</j1>')
        res.end()
    
    } else {
        res.end('Invalis Request')
    })

Server.listen
(PORT,(5000)) => 
console.log (`Server Runnig at `)