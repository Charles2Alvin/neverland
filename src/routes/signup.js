const User = require('../model/user');

const signUpRouter = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!reg.test(email)) {
        console.log("邮箱格式有误");
        res.status(400).send({msg: "Incorrect email format"});
        return;
    }
    const newUser = User({
        email: email,
        password: password
    });
    // 先验证该邮箱是否注册
    User.find().byName(email).exec(function (err, users) {
        const registered = users.length !== 0;
        if (!registered) {
            newUser.save(function (err, user) {
                if (err) return console.error(err);
                console.log("Saved a new user: ", user.show());
                res.status(200).send({msg: "Success"});
            })
        } else {
            res.status(400).send({msg: "This email has been registered"});
        }
    });
};

module.exports = signUpRouter;