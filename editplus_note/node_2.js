﻿var    http    =    require('http');    
var fun=require("node3.js")
http.createServer(function    (request,    response)    {      
        response.writeHead(200,    {'Content-Type':    'text/html;    charset=utf-8'});      
    if(request.url!=="/favicon.ico"){    //清除第2此访问 
		//	fun1(response);
		fun(response)
		response.end('');   
	}
}).listen(8887);
console.log('Server    running    at    http://127.0.0.1:8887/');    

function fun1(res){
	console.log("fun1")
     res.write("hello,我是fun1");
	 }