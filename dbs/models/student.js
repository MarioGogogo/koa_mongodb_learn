var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*定义数据模式*/
var StudentSchema = new mongoose.Schema({
  name   : String,
  classId: String,
  age    : Number,
  number : Number,
  meta   : {
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

module.exports = mongoose.model('student', StudentSchema, "student")