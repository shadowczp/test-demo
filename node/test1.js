var fs =require("fs");
// fs.readFile("C:\\Users\\czp\\Desktop\\22.txt",null,function (err,data) {
//     console.log(data.toString());
// });
//
// var buf = Buffer.from("测试一下中文")
// console.log(buf);
// console.log(buf.toString());


// var readStream = fs.createReadStream("C:\\Users\\czp\\Desktop\\22.txt",{highWaterMark:10});
// var data=[];
// readStream.on('data',function (chunk) {
//     data.push(chunk);
// });
// readStream.on('end',function () {
//     console.log(Buffer.concat(data).toString());
// });
function getAllFileByPath(path) {
    //读取目录
    fs.readdir(path,function (err,data) {
        //data是目录下的文件或者文件夹的数组
        for (var subPath of data){
            //同步读取子路径的状态
            var subPathStat = fs.statSync(path+"/"+subPath);
            if(subPathStat.isDirectory()){
                console.log("目录："+subPath);
                //如果是目录，就递归的获取子目录
                getAllFileByPath(path+"/"+subPath)
            }else {
                console.log("文件："+subPath)
            }
        }
    })
}

// getAllFileByPath("D:\\虚拟机文件夹");



// var http = require("http");
// var server = http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
//     res.end("你好，node");
//
// })
// server.listen(3000);


var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port:3004});
wss.on('connection',function (ws) {
    ws.on('message',function (msg) {
        console.log("接收到："+msg);
        ws.send("你发送的是："+msg);
    })

});