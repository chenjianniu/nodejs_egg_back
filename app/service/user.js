'use strict'

const Service = require('egg').Service

class UserService extends Service {

  /**
    * [ 增 ]
    */
  async create() {
    const result = await this.app.mysql.insert('users', { uid: 'uid:000', name: 'name:beijing' })
    return result.affectedRows === 1 ? { message: '添加成功' } : { message: '添加失败' }
  }

  /**
    * [ 删 ]
    */
  async delete() {
    const result = await this.app.mysql.delete('users', {
      id: 1,
    })
    return result.affectedRows === 1 ? { message: '删除成功' } : { message: '删除失败' }
  }

  /**
   * [ 改 ]
   */
  async update() {
    const row = {
      id: 11,
      uid: 'uid:000',
      name: 'name:beijing',
    }
    // 根据主键ID查找,并更新
    // let result = await this.app.mysql.update('users', row)
    // 根据条件查找,并更新
    const options = {
      where: {
        id: 11,
      },
    }
    const result = await this.app.mysql.update('users', row, options)
    return result.affectedRows === 1 ? { message: '更新成功' } : { message: '更新失败' }
  }

  /**
   * [ 查 ]
   */
  async list() {
    // 获取单条记录
    // const user = await this.app.mysql.get('users', { id: 11 })
    // 获取多条记录
    const user = await this.app.mysql.select('users', {
      where: { id: 11 },
      columns: [ 'id', 'uid', 'name' ],
      orders: [[ 'id', 'asc' ]],
      limit: 10,
      offset: 0,
    })
    return user
  }

  /**
   * [ 自定义查询 ]
   */
  async query() {
    const result = await this.app.mysql.query('select id, uid, name from users where uid = ?', [ 'uid:000' ])
    console.log('query => ', result)
    return result
  }

}

module.exports = UserService
