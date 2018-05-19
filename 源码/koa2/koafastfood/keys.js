const Koa = require('koa')
const KeyGrip = require('keygrip')

const app = new Koa()

async function receiver(ctx) {

    ctx.cookies.set('name', 'tobi', { signed: true });

    ctx.body = `${ctx.cookies.get('name')}`
}

// app.keys = ['im a newer secret', 'i like turtle']
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

app.use(receiver)

const port = 30024
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})