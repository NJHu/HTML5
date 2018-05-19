const Koa = require('koa')

const app = new Koa()

async function receiver(ctx) {
    ctx.body = 'hello'

    ctx.cookies.set('name', 'njhu')

    ctx.body = ctx.cookies.get('name')

    // ctx.throw('400', 'name error')
    ctx.body = {
        ctx
    }
}

app.use(receiver)

const port = 3012
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})