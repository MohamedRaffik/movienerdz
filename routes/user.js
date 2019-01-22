var express = require('express');
var router = express.Router();
module.exports = function(passport){

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
				return res.json({email: user.username,
					id: user.id,
				});
			});
		})(req,res,next);

	});
	return router;
};