const Koa = require('koa')

const app = new Koa()

function parserQueryStr(queryStr) {
    let queryJson = {};
    let queryStrList = queryStr.split('&');
    for (let [index, query] of queryStrList.entries()) {
        let itemKeyValue = query.split('=')
        console.log(itemKeyValue);
        queryJson[itemKeyValue[0]] = decodeURIComponent(itemKeyValue[1]);
    }
    return queryJson;
}

function parserData(postBody) {
    return new Promise((reslove, reject) => {
        try {

            let endStr = ''
            postBody.on('data', (ps) => {
                endStr += ps;
            })
            postBody.addListener('end', () => {

                let postbodyjson = parserQueryStr(endStr)

                reslove(postbodyjson)
            })

        } catch (error) {
            reject(error)
        }
    })
}

async function receiver(ctx) {
    // console.log(ctx)
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
        let postBodyData = ctx.req

        let parserEnd = await parserData(postBodyData)

        ctx.body = {
            ctx,
            parserEnd
        }
    } else {
        ctx.body = `<h1>404</h1>`
    }
}

app.use(receiver)

const port = 3011
app.listen(port, () => {
    console.log('http://127.0.0.1:3009' + 'listening')
})