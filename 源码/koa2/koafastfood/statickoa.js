const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './static'


app.use(static(
    path.join(__dirname, staticPath)
))


app.use(async (ctx) => {
    ctx.body = `hello`
})

const port = 7003
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})