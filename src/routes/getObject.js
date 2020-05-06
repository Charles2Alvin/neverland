const List = require('../model/likes');

const GetObjectRouter = (req, res) => {
    const email = req.body.email;
    console.log("In add router", email);
    List.find({email}).exec(function (err, users) {
        if (err) return console.error(err);
        if (users.length === 0) {
            return res.status(404).send("No logs for this user");
        }
        res.status.send({likes: users[0].likes});
    });


};

module.exports = GetObjectRouter;