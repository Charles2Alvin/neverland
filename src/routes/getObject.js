const List = require('../model/likes');

const getObjectRouter = (req, res) => {
    const email = req.body.email;
    console.log("In add router", email);
    List.find({email}).exec(function (err, users) {
        res.status.send({likes: users[0].likes});
    });

};

module.exports = getObjectRouter;