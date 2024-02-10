const jwt = require('jsonwebtoken')

function verifyToken(token, secret) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decode) => {
            if(err) {
                reject(err)
            }
            resolve(decode)
        })
    })
}


module.exports = () => {
    return async function auth_handler(ctx, next) {
        const token = ctx.request.header.authorization;
        if(!token) {
            ctx.throw(401, 'Unauthorized')
        }

        try {
            const decode = await verifyToken(token, ctx.app.config.jwt.secret);
            ctx.state.user = decode
            await next()
        } catch (error) {
            ctx.throw(401, 'Token Invalid')
        }
    }
}