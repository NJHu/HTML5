// import Router from 'koa-router'
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = {
        query: ctx.query,
        ctx
    }
})

app.use(router.routes())
    .use(router.allowedMethods())

const port = 4002
app.listen(port, () => {
    console.log(`127.0.0.1:${port}`)
})

