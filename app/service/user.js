const Service = require('egg').Service

class UserService extends Service {

/**
 * [ 增 ]
 */
  async create() {
    const result = await this.ctx.model.User.create({ uid: 'uid:000', name: 'name:beijing' })
    return result.dataValues ? { message: '添加成功' } : { message: '添加失败' }
  }

/**
 * [ 删 ]
 */
  async delete() {
    const user = await this.ctx.model.User.findById(1)
    if (!user) {
      this.ctx.status = 404
      return { message: '删除失败' }
    }
    return { message: '删除成功' }
  }

  /**
   * [ 改 ]
   */
  async update() {
    const user = await this.ctx.model.User.findById(1)
    if (!user) {
      this.ctx.status = 404
      return { message: '更新失败' }
    }
    await user.update({ uid: 'uid:0002', name: 'name:beijing2' })
    return { message: '更新成功' }
  }


  /**
   * [ 查 ]
   */
  async list() {
    // 获取单条记录
    // const user = await this.ctx.model.User.findAll({ where: { id: 1 } })
    // 获取多条记录
    const user = await this.ctx.model.User.findAll({
      where: { id: 1 },
      columns: ['id', 'uid', 'name'],
      orders: [['id', 'asc']],
      limit: 10,
      offset: 0
    })
    return user
  }

  /**
   * [ 自定义查询 ]
   */
  async query() {
    const result = await this.app.model.query(
      'select id, uid, name from users where id = ?',
      { replacements: [ 1 ], type:'SELECT' }
    )
    console.log('query => ',result)
    return result
  }

}

module.exports = UserService