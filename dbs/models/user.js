var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*定义数据模式*/
var UserSchema = new mongoose.Schema({
  phone : String,
  name:String,
  age:{
    type:Number,
    default:0,
  },
  city:String,
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
  },
  products: [{type: Schema.Types.ObjectId, ref: 'product'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]

});

module.exports = mongoose.model('user', UserSchema, "user")
