const List = require('../model/likes');

const addObjectRouter = (req, res) => {
    const email = req.body.email;
    const objectID = req.body.objectID;
    List.find({email}).exec(function (err, users) {
        if (err) console.error(err);
        const likes = users.length === 0 ? [objectID] : [...users[0].likes, objectID];
        List.findOneAndUpdate({email}, {likes: likes}, {upsert: true, new: true}).exec(function (err, lst) {
            console.log("New like lists for", email, objectID, lst);
            // for (let i = 0; i < lst.length; i++) {
            //     console.log(lst[i] + " ");
            // }
            res.status(200).send({status: 200, msg: "success"});
        })

    })
};

module.exports = addObjectRouter;