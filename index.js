//common js
const jsonServer = require('json-server')

const server = jsonServer.create()
// create a server usig json-server

server.use(jsonServer.defaults())
//defaults Returns middlewares


const route = jsonServer.router('db.json')
//tells the place where the data should be saved

server.use(route)

server.listen(3000,()=>{
    console.log('server is running on port no 3000')
})