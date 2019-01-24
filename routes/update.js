const {User,db} = require('../models/index');

var router = require('express').Router();


module.exports = () =>{
	router.post('/favorites',(req,res,next)=>{
		const userName = req.body.username;
		const userFavz = req.body.favorites;
		console.log("username:", userName, "favz:",userFavz);
		User.update({
			favorites: userFavz
		},
		{
			where:{
				username: userName
			}
		}).then(newFavz =>{

			console.log(`UPDATED FAVORITES SUCCESS USER: ${userName}`);
			res.send(newFavz);
		}).catch(err=> {
			console.log("error updating favz list:", err);
			return next(err);
		});

	});
	router.post('/later',(req,res,next)=>{
		const userName = req.body.username;
		const userWatchLater = req.body.watchLater;
		console.log("req username:", userName, "watchLater:",userWatchLater);
		User.update({
			watchLater: userWatchLater
		},
		{
			where:{
				username: userName
			}
		}).then(newLaterz =>{
			console.log(`UPDATED LATER SUCCESS USER: ${userName}`);
			res.send(newLaterz);
		}).catch(err=> {
			console.log("error updating laterz list:", err);
			return next(err);
		});
	});


	return router;
}



