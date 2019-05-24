var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/*定义数据模式*/
var BrandSchema = new mongoose.Schema({
  // 品牌
  name: { type: String },
  // 品牌图片
  img: { type: String,default:""}
})

module.exports = mongoose.model('brand', BrandSchema, "brand")
