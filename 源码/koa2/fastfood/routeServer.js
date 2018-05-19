const Koa = require('koa')
const Router = require('koa-router');

const app = new Koa()

const home = new Router()
home.get('/jspang', async (ctx) => {
    ctx.body = 'home jspang'
}).get('/todo', async (ctx) => {
    ctx.body = 'home todo'
})

const page = new Router()
page.get('/jspang', async (ctx) => {
    ctx.body = 'page jspang'
}).get('/todo', async (ctx) => {
    ctx.body = 'page todo'
})


// 装载子路由
const router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())


// 加载中间件
app.use(router.routes()).use(router.allowedMethods())

const port = 3025
app.listen(port, function () {
    console.log(`http://127.0.0.1:${port}  is listening`)
})