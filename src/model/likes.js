// https://juejin.im/post/5e9518b3518825738e21794c#heading-24

const mongoose = require("mongoose");
const listSchema = mongoose.Schema({
    email: String,
    likes: {type: Array, default: []}
});

// 定义了一个新的模型，但是此模式还未和users集合有关联，一定要在添加完所有方法/查询之后，
// 再编译成模型
const List = mongoose.model('list', listSchema); //  与User collection关联

module.exports = List;

