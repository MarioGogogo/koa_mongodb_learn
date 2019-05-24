var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/*定义数据模式*/
var CommentSchema = new mongoose.Schema({
  // 内容
  content: { type: String },
  // 作者id
  author: {type: Schema.Types.ObjectId, ref: 'user'}
})

module.exports = mongoose.model('comment',CommentSchema, "comment")
