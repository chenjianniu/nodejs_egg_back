'use strict'

const Controller = require('egg').Controller

class User extends Controller {

  async list() {
    const { ctx } = this
    console.log('获取解析的查询字符串(/:id/) => ', ctx.params)
    console.log('获取解析的查询字符串(get参数) => ', ctx.request.query)
    console.log('请求标头对象 => ', ctx.request.headers)
    console.log('Body参数 => ', ctx.request.body)
    const result = await ctx.service.user.query()
    ctx.body = result
    this.ctx.body = `say: ${this.ctx.hello}`
  }
}

module.exports = User
