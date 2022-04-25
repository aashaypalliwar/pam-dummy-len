const http = require('http');
const app = require('./app');

const server = http.createServer(app);

console.log("Starting app..");

server.listen(8080, ()=>{
  console.log(`Server is running on port ${8080}`)
});