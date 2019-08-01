const net = require('net')
const stdin = process.stdin
stdin.resume(); // start reading from stdin
stdin.setEncoding('utf8')
// const args = process.argv.slice(2)
const HOST_IP = 'localhost'
const PORT = 32767

const client = net.createConnection({
  host: HOST_IP,
  port: PORT
})

client.setEncoding('utf8')

client.on('connect', () => {
})

client.on('data', (data) => {
  console.log('Server message:', data)
})

client.wrap('testfile.txt')