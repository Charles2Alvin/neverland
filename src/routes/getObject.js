const getObjectRouter = (req, res) => {
    const email = req.body.email;
    console.log("In add router", email);
    res.status(200).send({status: 200, msg: "success", list: {objects: [1, 2, 3]}});

};

module.exports = getObjectRouter;