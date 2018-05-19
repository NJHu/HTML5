const Koa = require('koa')
const Router = require('koa-router');

const app = new Koa()

const router = new Router()
router.get('/', async (ctx, next) => {
    ctx.body = {
        query: ctx.query,
        ctx
    }
})

app.use(router.routes()).use(router.allowedMethods())


const port = 3027
app.listen(port, function () {
    console.log(`http://127.0.0.1:${port}  is listening`)
})