const Koa = require('koa');
const app = new Koa();


app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'MyName', 'JSPang', {
                domain: '127.0.0.1', // 写cookie所在的域名
                path: '/index',       // 写cookie所在的路径
                maxAge: 1000 * 60 * 60 * 24,   // cookie有效时长
                expires: new Date('2018-12-31'), // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';

        let name = ctx.cookies.get('MyName')

        ctx.body = {
            name
        }

    } else {

        let cookies = ctx.cookies

        ctx.body = {
            cookies
        }

    }
});


app.listen(3035, () => {
    console.log('[demo] server is starting at port 3000');
})