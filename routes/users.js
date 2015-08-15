var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('This is Users Template:'+req.path);
    res.render('users', { title: ' NodeJS Express Users' });
});

module.exports = router;
