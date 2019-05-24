var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/*定义数据模式*/
var ProductSchema = new mongoose.Schema({
  //发布者
  author: {type: Schema.Types.ObjectId, ref: 'user'},
  // 关联的品牌
  brand: { type: Schema.Types.ObjectId, ref: 'brand' },
  // 商品名称
  name: { type: String },
  // 商品内容
  content: { type: String },
  //喜欢
  like:{type:Number},
  //评论
  comments: [{type: Schema.Types.ObjectId, ref: 'comment'}],

})




module.exports = mongoose.model('product', ProductSchema, "product")
