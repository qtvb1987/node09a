import * as Koa from 'koa'
import * as bodify from 'koa-body'
import * as server from 'koa-static'
import * as timing from 'koa-xtime'

const app = new Koa()

app.use(timing())
app.use(server(`${__dirname}/public`))
app.use(bodify({
    multipart:true,
    //解析delete
    strict:false
}))

app.use((ctx : Koa.Context) => {
    ctx.body = 'hello 1111222'
})

app.listen(3000,() => {
    console.log('服务器启动成功')
})