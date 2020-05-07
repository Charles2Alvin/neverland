const List = require('../model/likes');

const RmObjectRouter = (req, res) => {
    const email = req.body.email;
    const objectID = req.body.objectID;
    List.find({email}).exec(function (err1, results) {
        if (err1) return console.error(err1);
        if (results.length === 0) return res.status(404).send("No such logs");
        if (results.length !== 1) return res.status(503).send("Server Error");
        const newList = results[0].likes;
        if (!newList.includes(objectID)) {
            return res.status(400).send("The list doesn't contain the obj");
        } else {
            const listCopy = results[0].likes.filter(r => r !== objectID);
            console.log("In rm single obj router", email, objectID, results[0].likes, listCopy);
            List.findOneAndUpdate({email}, {likes: listCopy}).exec(function (err2, lists) {
                if (err2) return console.error(err2);
                res.status(200).send("Success");
            })
        }
    })
};

module.exports = RmObjectRouter;