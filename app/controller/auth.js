const { Controller } = require('egg');
const jwt = require('jsonwebtoken')

class authController extends Controller {
    async getAuthToken () {
        const { ctx, config } = this;
        const rules = {
            username: {type: 'string', required: true },
            password: {type: 'string', required: true },
        }
        ctx.validate(rules, ctx.request.body);
        const token = jwt.sign(ctx.request.body, config.jwt.secret );
        ctx.body = { token }
    }
}

module.exports = authController