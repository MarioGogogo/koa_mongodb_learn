var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*定义数据模式*/
var OrderSchema = new mongoose.Schema({
  uid: {
    type: Schema.Types.objectId,
    ref : 'user'
  },
  amount: {
    type    : Number,
    required: true
  },
  oType: {
    type    : Number,
    required: true
  }, // 订单类型
  status: {
    type    : Number,
    required: true
  }, // 订单的状态:1完成  2未完成 3失效
})

module.exports = mongoose.model('order', OrderSchema, "order")