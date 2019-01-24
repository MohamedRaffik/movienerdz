var express = require('express');
var router = express.Router();



function signup(passport){

	router.post('/signup',function(req,res,next){
		passport.authenticate('local-signup', function(err,user,info){
			if(err){
				return next(err);
			}
			if(!user){
				return next({error: true, message:info});
			}

			req.login(user,function(loginErr){
				if(loginErr){
					return next(loginErr);
				}
				return res.json(user);
			});
		})(req,res,next);

	});
	return router;
};

function login(passport){
	router.post('/login', function(req,res,next){
		passport.authenticate('local-login', function(err,user,info){
			if(err){
				return next(err);
			}
			if(!user){
				return next({error: true, message:info});
			}

			req.login(user,function(loginErr){
				if(loginErr){
					return next(loginErr);
				}
				return res.json(user);
			});
		})(req,res,next);

	});
	return router;
};


module.exports = {
	signup, login

}