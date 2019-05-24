const router = require('koa-router')()
const User  = require('../dbs/models/user')
const Order = require('../dbs/models/order')
router.prefix('/users')
let code = 0;
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
/**
 * 查 ---------->链表查询
 */
router.get('/getOrder', async function (ctx) {
  const res = await Order.find().populate({
    path  : 'uid',
    model : User,
    select: '_id phone status'
  }).exec()

  // 下面我简单介绍一些$lookup中的参数：
  // from： 需要关联的表【 orders】
  // localField: 【product】 表需要关联的键。
  // foreignField：【 orders】 的matching key。
  // as： 对应的外键集合的数据，【 因为可能是一对多的， 对吧】
  // const res = await Order.aggregate([{
  //   $lookup: {
  //     from        : 'user',
  //     localField  : 'uid',
  //     foreignField: '_id',
  //     as          : "user_docs"
  //   }
  // }])
  ctx.body = {
    code: 0,
    data: res
  }
})
// [{
//     _id: 5 c5afa5b83dd7306d0fbb4dd,
//     uid: {
//       _id  : 5 c5af87a38de7306b3c47b6f,
//       phone: '123'
//     },
//     amount: 0,
//     oType : 1,
//     status: 0,
//     __v   : 0
//   },

// ]
/**
 * 增
 */
router.post('/addUser', async function (ctx) {
  const user = new User({
    phone : ctx.request.body.phone,
    status: ctx.request.body.status,
  })
  try {
    await user.save();
    code = 0;
  } catch (error) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})
router.post('/addOrder', async function (ctx) {
  const order = new Order({
    uid   : ctx.request.body.uid,
    amount: ctx.request.body.amount,
    oType : ctx.request.body.oType,
    status: ctx.request.body.status,
  })
  try {
    await order.save();
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
