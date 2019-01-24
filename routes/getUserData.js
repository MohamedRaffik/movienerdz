const {User,db} = require('../models/index');

var router = require('express').Router();


module.exports = () =>{
	router.post('/favorites',(req,res,next)=>{
		const userName = req.body.username;
		
		console.log("req username:", userName);

		User.findAll(
		{
			where:{
				username: userName
			}, attributes: ['id', 'favorites']
		}).then(favz =>{
			console.log(`GET FAVORITE SUCCESS USER: ${userName}`);
			res.send(favz);
		}).catch(err=> {
			console.log("error getting favz list:", err);
			return next(err);
		});

	});
	
	router.post('/later',(req,res,next)=>{
		const userName = req.body.username;
		
		console.log("req username:", userName);

		User.findAll(
		{
			where:{
				username: userName
			},attributes: ['id', 'watchLater']
		}).then(laterz =>{
			console.log(`GET LATER SUCCESS USER: ${userName}`);
			res.send(laterz);
		}).catch(err=> {
			console.log("error getting watch later list:", err);
			return next(err);
		});

	});

	

	return router;
}



