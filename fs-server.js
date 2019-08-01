const PORT = 32767;

const net = require('net')

const server = net.createServer();

server.listen(PORT);

const doAfterConnection = function (connection) {
  connection.write('Welcome to TCP file server')
  connection.write('Enter the name of the file you want:')
  connection.setEncoding('utf8')
  connection.on('data', (data) => {
    console.log('Client message:', data)
    getFile(data);
  })
}

const getFile = function(filename) {
  fs.open(filename, 'r', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`${filename} does not exist`);
        // prompt to overwrite
        // code goes here
        return;
      }
      throw err;
    }
    fs.readFile(filename, (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  })
}

server.on('connection', doAfterConnection)