var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aca estaria toda los alimentos para gatos');
});

module.exports = router;
