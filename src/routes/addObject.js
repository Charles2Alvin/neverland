const addObjectRouter = (req, res) => {
    const email = req.body.email;
    const objectID = req.body.objectID;
    console.log("In add router", email, objectID);
    res.status(200).send({status: 200, msg: "success"});

};

module.exports = addObjectRouter;