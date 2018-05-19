const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

async function receiver(ctx) {
    if (ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = ctx.request.body;
        let request = ctx.request
        ctx.body = {postData,request};
    } else {
        ctx.body = '<h1>404!</h1>';
    }
}

app.use(bodyParser())
app.use(receiver)

const port = 30004

app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})