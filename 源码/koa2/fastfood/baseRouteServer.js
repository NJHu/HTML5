const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

function render(page) {
    return new Promise((reslove, reject) => {
        try {
            let pageUrl = `./${page}`;
            fs.readFile(pageUrl, "binary", (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(data)
                }
            })
        } catch (error) {
            reject(err)
        }
    })
}

async function route(url) {
    let page = '404.html'
    switch (url) {
        case '/':
        case '/index':
            page = 'index.html'
            break
        case '/todo':
            page = 'todo.html'
            break
        default:
            break
    }

    let html = await render(page)
    return html
}

async function receiver(ctx) {

    let url = ctx.url;
    let html = await route(url)

    ctx.body = html
}

app.use(receiver)

const port = 3018
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} is listening`)
})