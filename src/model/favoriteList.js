// https://juejin.im/post/5e9518b3518825738e21794c#heading-24

const mongoose = require("mongoose");
const listSchema = mongoose.Schema({
    email: String,
    password: String
});

// Design the way to print info
listSchema.methods.show = function() {
    return "User " + this.id + "\t" + this.email + "\t" + this.password
};
// design some common queries //
listSchema.query.byName = function (email) {
    return this.find({email: new RegExp(email, 'i')})
};
// 定义了一个新的模型，但是此模式还未和users集合有关联，一定要在添加完所有方法/查询之后，
// 再编译成模型
const User = mongoose.model('User', listSchema); //  与User collection关联

module.exports = User;

