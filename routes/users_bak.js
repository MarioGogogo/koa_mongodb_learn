const router = require('koa-router')()
const Student = require('../dbs/models/student')
router.prefix('/users')
let code = 0;
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
/** 
 * 查
 */
router.get('/getPerson', async function (ctx) {
  const result = await Student.find({})
    .populate('classId') //注意这是联合查询的关键
    .sort('meta.updateAt')
    .exec();

  ctx.body = {
    code: code,
    data: result
  }
})
/** 
 * 增
 */
router.post('/addPerson', async function (ctx) {
  const student = new Student({
    name   : ctx.request.body.name,
    age    : ctx.request.body.age,
    number : ctx.request.body.number,
    classId: ctx.request.body.classId,
  })
  await student.save();
  try {
    await student.save();
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
// router.post('/updatePerson', async function (ctx) {
//   const reulst = await Person.where({
//     name: ctx.request.body.name
//   }).update({
//     age: ctx.request.body.age
//   })
//   ctx.body = {
//     code: 0
//   }
// })
/** 
 * 删
 */
// router.get('/removePerson', async function (ctx) {
//   const reulst = await Person.where({
//     name: ctx.request.query.name
//   }).remove()
//   ctx.body = {
//     code: 0
//   }
// })

module.exports = router