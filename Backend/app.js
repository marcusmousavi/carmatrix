
const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express'); //start an express app
const app = express();
const port = 3000;

app.use(express.static('../Frontend')); //specifies root directory from which to... 
                                        //serve static assets


const server = http.createServer(function(req,res){                      //"/index.html"
        res.writeHead(200, {'Content-Type': 'text/html'})
        
        fs.readFile('../Frontend/Home/index.html', function(error,data){
            if(error){
                res.writeHead(404);
                res.write('Error: File Not Found');
            } 
            else {
                res.write(data);
            }  
        })

        fs.readFile('../Frontend/Home/main.js', function(error,data){
            if(error){
                res.writeHead(404);
                res.write('Error: File Not Found');
            } 
            else {
                res.write(data);
            }  
        })

        fs.readFile('../Frontend/Home/index_style.css', function(error,data){
            if(error){
                res.writeHead(404);
                res.write('Error: File Not Found');
            } 
            else {
                res.write(data);
            }  
        })


})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error);
    }
    else {
        console.log('Server is listening on port ' + port);
    }
});