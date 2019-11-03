var express = require('express');
var router = express.Router();

/* Member's Page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

function ensureAuthenticated(req,res,next) {
	if(req.isAuthenticated()) {
		return next();
	}
	req.flash('error','Please login.');
	res.redirect('/users/login');
}

module.exports = router;
