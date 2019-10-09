const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
    res.send(req.user);
    User.findbyOne({_id: req.user});
    res.json({dashboard: {title: 'my first post', description: 'random data with privilege'}});
})

module.exports = router;