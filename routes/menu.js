var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu', { title: 'Hamila' });
});

module.exports = router;

//after you've made a javascript for the jade file with the same name. go to app.js and follow steps