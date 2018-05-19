const Koa = require('koa')

const app = new Koa()

async function receiver(ctx) {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `<form method="POST" action="/">
            <p>uername</p>
            <input name="username"/>
            <p>age</p>
            <input name="age"/>
            <p>web</p>
            <input name="web"/>
            <button type="submit">提交</button>
            </form>`
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // ctx.body = '接收到请求'
        let parserdata = await parsePostData(ctx)
        ctx.body = {
            parserdata
        }
    }
}


function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = ''
            ctx.req.on('data', (data) => {
                postdata += data
            })
            ctx.req.addListener('end', function () {
                let json = jsonData(postdata)
                resolve(json)
            })

        } catch (error) {
            reject(error)
        }
    })
}

function jsonData(queryStr) {
    let array = queryStr.split('&')
    var jsonarr = {}
    for ([index, keyValue] of array.entries()) {
        let keyvaluejsonarr = keyValue.split('=');
        jsonarr[keyvaluejsonarr[0]] = decodeURIComponent(keyvaluejsonarr[1])
    }
    return jsonarr
}

app.use(receiver)

const port = 50003
app.listen(port, () => {
    console.log(`127.0.0.1:${port} is listening`)
})