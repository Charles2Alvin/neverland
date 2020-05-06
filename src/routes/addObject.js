const List = require('../model/likes');

const addObjectRouter = (req, res) => {
    const email = req.body.email;
    const objectID = req.body.objectID;
    List.find({email}).exec(function (err, users) {
        if (err) console.error(err);
        const newList = users[0].likes.push(objectID);
        List.findOneAndUpdate({email}, {likes: newList}, {upsert: true, new: true}).exec(function (err, lst) {
            console.log("New like lists for", email);
            for (let i = 0; i < newList.length; i++) {
                console.log(newList[i] + " ");
            }
            res.status(200).send({status: 200, msg: "success"});
        })

    })
};

module.exports = addObjectRouter;