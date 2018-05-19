const Koa = require('koa')
const http = require('http')
const https = require('https')

const app = new Koa()

async function receiver(ctx) {
    ctx.body = 'hello'
}

app.use(receiver)

const port = 30014
// app.listen(port, () => {
//     console.log(`127.0.0.1:${port} is listening`)
// })

console.log(app.callback())

http.createServer(app.callback()).listen(port)
https.createServer(app.callback()).listen(port + 1)