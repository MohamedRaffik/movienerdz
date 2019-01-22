var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index');

module.exports = function (passport){

	passport.serializeUser(function(user,done){
		done(null,user.id);
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},processSignupCallback));
}

function processSignupCallback(req,username,password,done){
	User.findOne({
		where:{
			'username':username
		},
		attributes: ['id']
	}).then(function(user){
		if(user){
			return done(null,false,"username already exists");
		}else{
			var userToCreate = req.body;
			User.create(userToCreate).then(function(createdRecord){
				createdRecord.password = undefined;
				return done(null,createdRecord);
			})
		}
	});


}