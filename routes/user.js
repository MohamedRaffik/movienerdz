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

	router.get('/', function (req, res, next) {
		if (req.user) {
			return res.status(200).json({ username: req.user.username, favorites: req.user.favorites || [], watchLater: req.user.watchLater || [] });
		}
		return res.status(400).json({ error: 'User not authenticated' });
	})

	return router;
}