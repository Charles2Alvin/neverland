const List = require('../model/likes');

const addObjectRouter = (req, res) => {
    const email = req.body.email;
    const objectID = req.body.objectID;
    List.find({email}).exec(function (err, users) {
        if (err) console.error(err);
        const list  = users[0].likes;
        if (list.includes(objectID)) return res.status(400).send("Already contains this object");
        const likes = users.length === 0 ? [objectID] : [...list, objectID];
        List.findOneAndUpdate({email}, {likes: likes}, {upsert: true, new: true}).exec(function (err, lst) {
            console.log("New like lists for", email, objectID, lst);
            res.status(200).send({status: 200, msg: "success"});
        })

    })
};

module.exports = addObjectRouter;