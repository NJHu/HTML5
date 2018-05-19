const Koa = require('koa')

const app = new Koa()


app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
    console.log(`X-Response-Time, ${ms}ms`)
})

app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})


app.use(async (ctx) => {
    console.log('1111111')
    console.log(app.env)
    console.log(app.proxy)
    console.log(app.subdomainOffset)
    ctx.body = 'hello'
})


const port = 30007
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})