const User = require('../model/user');
const sigInRouter = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.find({email}).exec(function (err, users) {
        if (err) console.error(err);
        if (users.length === 0) {
            res.status(400).send({msg: "Email does not exist"});
        }
        else if (users[0].password === password) {
            res.status(200).send({status: '200', msg: "Success"});
        } else {
            console.log(users[0].password, password, email);
            res.status(400).send({msg: "Incorrect password"});
        }
    })
};

module.exports = sigInRouter;
