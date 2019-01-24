var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Public");
    res.render('public', { title: 'Express' });
});
module.exports = router;