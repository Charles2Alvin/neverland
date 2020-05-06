const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    id: Number,
    email: String,
    password: String
});

// Design the way to print info
userSchema.methods.show = function() {
    return "User " + this.id + "\t" + this.email + "\t" + this.password
};
// design some common queries //
userSchema.query.byName = function (email) {
    return this.find({email: new RegExp(email, 'i')})
};
// 定义了一个新的模型，但是此模式还未和users集合有关联，一定要在添加完所有方法/查询之后，
// 再编译成模型
const User = mongoose.model('User', userSchema); //  与User collection关联

module.exports = User;

