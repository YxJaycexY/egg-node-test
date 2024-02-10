module.exports = () => {
    return async function responseHandler(ctx, next) {
        try {
            await next();
            const data = ctx.body;
            console.log(data)
            //包括null
            if (typeof data === 'object') {
                ctx.body = {
                    code: 200,
                    data,
                    msg: "Success"
                }
            } else {
                ctx.body = data
            }
        } catch (error) {
            ctx.app.emit('error', error, ctx);
            ctx.body = {
                code: 500,
                data: error.message,
                msg: "fail",
            }
        }
    }
}