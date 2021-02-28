const Koa = require('koa')

const app = new Koa()

app.listen('3030', () => {
    console.log(`koa server is running`);
})