const User = require('./dbs/models/user')
const Order = require('./dbs/models/order')
const Product = require('./dbs/models/product')
const Brand = require('./dbs/models/brand')


 Methods = async ()=> {
  //创建用户
  // const userInfo = {phone: "123456", status: 2,name:"迪丽",age:28,city:"新疆"}
  // console.log('123213')
  // const result = await User.create(userInfo)
  //  console.log('22222')
  //  console.log(result)
  //  if(result){
  //    const id = {_id:result._id};
  //    const update = {phone:"8888888"}
  //   const res = await User.findOneAndUpdate(id,update);
  //    console.log(res)
  //  }
  //  console.log('33333')













  //创建品牌
  // const brand = new Brand({name:"格力",img:"http://www.baidu.com"});
  // const brand1 = new Brand({name:"美的",img:""});
  // const brand2 = new Brand({name:"海尔",img:""});
  // brand.save();
  // brand1.save();
  // brand2.save();
  // console.log('品牌创建成功')

  // 添加商品
   const info = {
     author:"5ce7ce02d859c522b26ecd26",
     name:"顾家家具",
     content:"家具",
     brand:"5ce7540fd367e50bbf42467f",
     like:120,
     comments:[]
   }
   const result = await Product.create(info)
    if(result){
      const id = {_id:result._id};
      const resfind = await  User.findOne({_id:info.author});
      console.log('resfind',resfind)
     const update = {products:[result._id,...resfind.products,]}
     const res = await User.findOneAndUpdate(info.auhtor,update);
      // console.log(res)
      console.log('商品添加',res)
    }



   // const res = await Order.find().populate({
   //   path  : 'uid',
   //   model : User,
   //   select: '_id phone status'
   // }).exec()

   // 查询品牌下面有多少商品种类
   // const res = await Brand.aggregate([{
   //   $lookup: {
   //     from        : 'product',
   //     localField  : '_id',   //本表
   //     foreignField: 'brand',  //外表
   //     as          : "brand_docs"
   //   }
   // }])

   // 查询商品下面品牌的资料
   // const res = await Product.find({}).populate({
   //    path:"brand",
   //    modal:Brand,
   //    select:"_id name img"
   // }).exec();


   // 更新
   // const collection = {brand:"5ce7540fd367e50bbf42467f"};
   // const update = {like:120,content:"我是更新的手机11"}
   // const find = await Product.findOne(collection);
   // console.log('find',find)
   // // const res = await Product.updateOne(collection,update); //更新一个
   // let res;
   // if(find){
   //   res = await Product.updateMany(collection,update);   //批量更新
   // }else{
   //   res = "找不到数据"
   // }

   // const collection = {_id:"5ce74d5c0227140ab946f412"};
   // const arr = [
   //   {
   //     userId:"5c5da6347852d511cc3a82f6",
   //     conent:"第一条评论",
   //   },{
   //   userId:"5c5da6347852d511cc3a82f6",
   //   conent:"我还要评论一条",
   // },
   //   {
   //     userId:"5c5da6387852d511cc3a82f7",
   //     conent:"李晨来啦",
   //   }
   // ]
   // const update = {comment:arr}
   // const res = await Product.updateOne(collection,update);
   // console.log(res)





   // findOneAndUpdate, findOneAndReplace or findOneAndDelete
   // const res = await Product.findOneAndUpdate(collection,update,function (err,doc) {
   //     console.log(doc)  //这个返回的是没有更新前的内容 \
   // })
   // console.log(res)
  //删除  deleteOne, deleteMany
  //  const collection = {_id:"5ce754574b75bf0bd2c02238"};
  //  const res = await Product.deleteOne(collection);


   //链表查询

  //  const res = await Product.find({});
  //
  // console.time("mon")
  // const obj = await find(res)


  //  function find(res){
  //    return new Promise((resolve,reject)=>{
  //      let arr = []
  //      res.map(async (item, index) => {
  //        let commets = item.comment;
  //        console.log(commets)
  //        if (commets.length > 0) {
  //          for (let i = 0; i < commets.length; i++) {
  //            const id = commets[i].userId;
  //            console.log(id)
  //            const result = await findOne(id)
  //            arr.push(result)
  //          }
  //
  //        }
  //        console.log('arr',arr);
  //          resolve(arr)
  //      })
  //
  //    })
  //  }
  //
  // function  findOne(id){
  //   return new Promise((resolve,reject)=>{
  //     User.find({_id:id},function (err,doc) {
  //         resolve(doc)
  //     });
  //
  //   })
  //  }
  //
  //
  //  console.log('obj',obj)



   console.timeEnd("mon")












}


module.exports = Methods


// // 过滤条件
// const options = {
//   sort: { _id: -1 },
//   page: Number(page),
//   limit: Number(size),
//   // populate: ['brand', 'tag'],
//   populate: [{ path: 'brand', select: 'name' }, 'tag'],
//   select: '-password -content'
// };
// // 查询参数
// const keywordReg = new RegExp(keyword)
// const query = {
//   "$or": [
//     { 'name': keywordReg },
//     { 'slug': keywordReg },
//     { 'description': keywordReg }
//   ]
// }
// const ones = await Product.paginate(query, options)
