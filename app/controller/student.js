const { Controller } = require('egg');

class StudentController extends Controller {
  async list() {
    const { ctx } = this;
    const results = await this.app.mysql.select('student')
    ctx.body = results;
  }

  async get() {
    const { ctx } = this;
    const results = await this.app.mysql.get('student', {sid: ctx.params.sid})
    ctx.body = results;
  }
}

module.exports = StudentController;
