const List = require('../model/likes');

const RmAllObjectRouter = (req, res) => {
    const email = req.body.email;
    List.find({email}).exec(function (err1, results) {
        if (err1) return console.error(err1);
        if (results.length === 0) return res.status(404).send("No such logs");
        if (results.length !== 1) return res.status(503).send("Server Error");
        List.findOneAndUpdate({email}, {likes: []}).exec(function (err2, lists) {
            if (err2) return console.error(err2);
            res.status(200).send("Success");
        });
    })
};

module.exports = RmAllObjectRouter;