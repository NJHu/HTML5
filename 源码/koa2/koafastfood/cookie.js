const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {

    if (ctx.url === '/index') {
        ctx.cookies.set('MyName', 'alan', {
            domain: '127.0.0.1',
            path: '/index',
            maxAge: 1000 * 3600 * 24,
            expires: new Date('2018-12.31'),
            httpOnly: false,
            overwrite: false
        })
        // domain：写入cookie所在的域名
        // path：写入cookie所在的路径
        // maxAge：Cookie最大有效时长
        // expires：cookie失效时间
        // httpOnly:是否只用http请求中获得
        // overwirte：是否允许重写
        ctx.body = 'cookie is ok'
    } else {
        let name = ctx.cookies.get('MyName')
        if (name) {
            ctx.body = `name is ${name}`
        } else {
            ctx.body = 'cookie is none'
        }
    }
})


const port = 50004
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})
