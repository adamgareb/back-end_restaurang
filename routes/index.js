var express = require('express');
var router = express.Router();
// const app = express()

// app.listen(3000)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'to Hamila' });
});

module.exports = router;