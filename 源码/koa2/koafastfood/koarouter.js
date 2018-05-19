const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')


let home = new Router()
home.get('/jspang', async (ctx) => {
    ctx.body = 'home jspang'
}).get('/todo', async (ctx) => {
    ctx.body = 'home todo'
})

let page = new Router()
page.get('/jspang', async (ctx) => {
    ctx.body = 'page jspang'
}).get('/todo', async (ctx) => {
    ctx.body = 'page todo'
})


let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())


app.use(router.routes())
    .use(router.allowedMethods())

const port = 8009
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})

