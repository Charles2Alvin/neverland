const List = require('../model/likes');

const GetObjectRouter = (req, res) => {
    const email = req.body.email;
    List.find({email}).exec(function (err, users) {
        if (err) return console.error(err);
        if (users.length === 0) {
            return res.status(404).send("No logs for this user");
        }
        console.log("Get likes:", users[0].likes);
        res.status(200).send({likes: users[0].likes});
    });


};

module.exports = GetObjectRouter;