// https://www.tutorialspoint.com/nodejs/nodejs_request_object.htm
// https://zhuanlan.zhihu.com/p/27162732
// https://blog.csdn.net/houdada1/article/details/70157486
// https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
// https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274
// https://expressjs.com/en/5x/api.html#res.status

// 连接数据库
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/neverland', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(r => console.log(r));

// 创建express应用
const express = require('express');
const app = express();

// 启用cors中间件处理跨域请求
const cors = require("cors");
app.use(cors());

// 启用logger记录网络日志，结果输出到access.log文件中
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
const logger = require("morgan");
app.use(logger('short', {stream: accessLogStream}));

// 启用该中间件，来提取http请求中的body，使之可以解析通过post请求传来的JSON，buffer，string之类的数据
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 将路径匹配到对应的路由器
const indexRouter = require('./routes/index');
const signInRouter = require('./routes/signin');
const signUpRouter = require('./routes/signup');
app.get('/', indexRouter);
app.post('/signin', signInRouter);
app.post('/signup', signUpRouter);

// 启动服务器
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
