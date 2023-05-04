//!getting path package (buildin package)
const path = require('path');

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename));      //!base file name

// console.log(path.dirname(__filename));       //!directory name

// console.log(path.extname(__filename));       //!file extension

// console.log(path.parse(__filename).base);        //!create path object

// console.log(path.join(__dirname,"test","hello.html"))   //!concatenate paths

//.....................................................................................................................................................

//!getting file system package (buildin package)
const fs = require('fs');

//!creating folder
// fs.mkdir(path.join(__dirname,"/test"), {}, (err) => {
//     if(err) {
//         throw err
//     };
//     console.log('folder created...');
// });

//!create and write file // write to exist file
// fs.writeFile(path.join(__dirname,"/test", 'hello.txt'), "hello world!", (err) => {
//     if(err) {
//         throw err
//     };
//     console.log('file created...');
// });
//!rewrite data in the file
// fs.writeFile(path.join(__dirname,"/test", 'hello.txt'), "I love node.js", (err) => {
//     if(err) {
//         throw err
//     };
//     console.log('file created...');
// });
//!append data in the file
// fs.appendFile(path.join(__dirname,"/test", 'hello.txt'), " I love node.js", (err) => {
//     if(err) {
//         throw err
//     };
//     console.log('file created...');
// });
//!read file
// fs.readFile(path.join(__dirname,"/test", 'hello.txt'), "utf8", (err,data) => {
//         if(err) {
//             throw err
//         };
//         console.log(data);
//     });

// fs.readdir("./node_modules", (err,data) => {
//     if(err) {
//         console.log(err)
//         }else{
//             console.log(data)
//         }
//     });

// const file = fs.readdirSync("./node_modules"); 
// console.log(file);

//!rename file
// fs.rename(path.join(__dirname,"/test", 'hello.txt'), 
// path.join(__dirname,"/test", 'hi.txt'), (err) => {
//     if(err) {
//         throw err
//     };
//     console.log('file renamed...');
// });
 //!copy src file and paste that file
// fs.copyFileSync('file1.txt','file2.txt');

//..................................................................................................................................................

//!getting os system package (buildin package)
const os = require('os');


// console.log(os.platform()); //!platform

// console.log(os.arch());     //!cpu arch

// console.log(os.cpus());     //!cpu core info

// console.log(os.freemem());  //!free memory

// console.log(os.totalmem()); //!total memory

// console.log(os.homedir());      //!home dir

// console.log(os.uptime());       //!system run time


//................................................................................................................................................

//!getting URL package (buildin package)
const url = require('url');

// const myUrl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

// console.log(myUrl.href);
// console.log(myUrl.toString());
// console.log(myUrl.host);
// console.log(myUrl.hostname);
// console.log(myUrl.port);
// console.log(myUrl.pathname);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);
// myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));


//..................................................................................................................................................

//!getting event package (buildin package)

const event = require('events');

const emitter = new event();

emitter.on('tap', (arg) => {    //!make an event listener
    console.log('tap event ', arg);
});


emitter.emit('tap', {id:1 , url: 'http://'});   //!raise an event with arguments



//......................................................................................................................................................

//!getting http package (buildin) 
const http = require('http');

//!create server object
// http.createServer((req,res) => {
//     res.write('hello world');    //!write response /output in this server
//     res.end();
// }).listen(5000,() => console.log('server is running...'));     //!server run at this port and we can call (localhost:5000)


// const server =  http.createServer((req,res) => {
//     if(req.url === '/index'){
//         res.end('<h1>TOTORO the Conqueror</h1>')
//     }else{
//         res.end('<h1>TOTORO</h1>')
//     }
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`server is running at port ${PORT}`));