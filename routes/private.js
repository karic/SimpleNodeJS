var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.cookies['authenticated']);
    if (req.cookies['authenticated']==='true') res.render('private', {title: 'Express'});
    else res.redirect(302, '/public');
});
module.exports = router;