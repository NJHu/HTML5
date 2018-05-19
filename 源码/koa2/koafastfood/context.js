const Koa = require('koa')
const app = new Koa()

async function receiver(ctx) {

    if (ctx.url === '/' && ctx.method === 'GET') {

        let html = `
        <form method="POST" action="/">
        <p>uername</p>
        <input name="username"/>
        <p>age</p>
        <input name="age"/>
        <p>web</p>
        <input name="web"/>
        
        <button type="submit">submit</button>
    </form>
    `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = {
            ctx
        }
    }

    // ctx.reject();
    // ctx.body = {
    //     ctx
    // }

}

app.use(receiver)

app.on('error', (error, ctx) => {

    console.log(error, ctx)
})

const port = 3007
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})