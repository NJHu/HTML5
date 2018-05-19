const Koa = require('koa')
const KoaBodyParser = require('koa-bodyparser');

const app = new Koa()
const bodyParser = new KoaBodyParser()

app.use(bodyParser)


async function receiver(ctx) {
    if (ctx.url === '/' && ctx.method === 'GET') {

        let html = `<form action="/" method="POST">
                <p>userName</p>
                <input name="userName"/> <br/>
                <p>age</p>
                <input name="age"/> <br/>
                <p>webSite</p>
                <input name='webSite'/><br/>
                <button type="submit">submit</button>
            </form>`

        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        console.log(ctx)
        let postBodyData = ctx.request.body
        console.log(postBodyData)
        ctx.body = {
            ctx,
            postBodyData
        }
    } else {
        ctx.body = `<h1>404</h1>`
    }
}

app.use(receiver)

const port = 3013
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} is listening`)
})