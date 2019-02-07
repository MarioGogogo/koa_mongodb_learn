var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*定义数据模式*/
var UserSchema = new mongoose.Schema({
  phone : String,
  status: String,
  meta  : {
    createAt: {
      type   : Date,
      default: Date.now()
    },
    updateAt: {
      type   : Date,
      default: Date.now()
    }
  }
  /*更新时间的*/
});

module.exports = mongoose.model('user', UserSchema, "user")