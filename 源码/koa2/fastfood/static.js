const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './static'

app.use(static(
    path.join(__dirname, './')
))


app.use(async (ctx) => {
    ctx.body = 'hello world'
})

const port = 9002
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})