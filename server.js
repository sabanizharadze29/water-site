var http = require('http'); // 1 - Import Node.js core module

const port = 3000;

var fs = requre('fs');

var server = http.createServer(function (req, res) {   // 2 - creating server

    res.writeHead(200,{'Content-Type':'index.html'});
    fs.readFile('index.html',function (error,data) {
        if (error) {
            res.writeHead(404)
            res.write('Error:File Not Found')
        } else {
        res.write(data)            
        }
res.end()

    })
    //handle incomming requests here..

});

server.listen(port,function(error){
    if (error) {
        console.log('something went wrong',error);
    } else {
        console.log('Server is Listening',port);
        
    }
})