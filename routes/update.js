const { User } = require('../models/index');
const router = require('express').Router();

router.post('/favorites', (req, res, next) => {
	const userName = req.body.username;
	const userFavz = req.body.favorites;
	User.update({
		favorites: userFavz
	},
		{
			where: {
				username: userName
			}
		})
		.then(newFavz => res.send(newFavz))
		.catch(err => next(err));
});

router.post('/later', (req, res, next) => {
	const userName = req.body.username;
	const userWatchLater = req.body.watchLater;
	User.update({
		watchLater: userWatchLater
	},
		{
			where: {
				username: userName
			}
		})
		.then(newLaterz => res.send(newLaterz))
		.catch(err => next(err))
});

module.exports = router;



