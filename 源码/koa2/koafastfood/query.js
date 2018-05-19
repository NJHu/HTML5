const Koa = require('koa')

const app = new Koa()

async function receiver(ctx) {

    let url = ctx.url

    let request = ctx.request
    let query = request.query
    let queryStr = request.querystring

    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    ctx.body = {
        query,
        queryStr,
        request,
        ctx_query,
        ctx_querystring
    }
}

// 用异步函数
app.use(receiver)

const port = 4003
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})