var express = require('express');
var router = express.Router();

module.exports = (passport) => {
	router.post('/signup', (req, res, next) => {
		passport.authenticate('local-signup', (err, user, info) => {
			if (err) return next(err);
			if (!user) return next({ error: true, message: info });
			req.login(user, (loginErr) => {
				if (loginErr) return next(loginErr);
				return res.json(user);
			})
		})(req, res, next);
	});

	router.post('/login', function (req, res, next) {
		passport.authenticate('local-login', (err, user, info) => {
			if (err) return next(err);
			if (!user) return next({ error: true, message: info });
			req.login(user, (loginErr) => {
				if (loginErr) return next(loginErr);
				return res.json(user);
			});
		})(req, res, next);
	});

	return router;
}