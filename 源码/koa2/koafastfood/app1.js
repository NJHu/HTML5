const Koa = require('koa')

const app = new Koa()

async function receiver(ctx) {
    ctx.body = 'hello'
}

app.use(receiver)

const port = 30002
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})