const router = require('koa-router')()
const Calss = require('../dbs/models/class')
router.prefix('/student')
let code = 0;
/** 
 * 查
 */


/** 
 * 增
 */
router.post('/addClass', async function (ctx) {
  const calss = new Calss({
    name: ctx.request.body.name,
  })
  try {
    await calss.save();
    code = 0;
  } catch (error) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})
/** 
 * 改
 */

/** 
 * 删
 */


module.exports = router