var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').User;


function signupStrategy(passport){

	passport.serializeUser(function(user,done){
		done(null,user.id);
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},processSignupCallback));

	passport.use('local-login', new LocalStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback: true
	}, processLoginCallback));
}

function processLoginCallback(req,username,password,done){
	console.log("username:",username,"password:",password,"done: ",done);
	User.findOne({
		where: {
			'username' : username
	},attributes: ['id','password','username','favorites','watchLater']
	}).then(function(user) {
		if (!user) {
			return done(null, false, {foundUser:false})
		}
		
		if(user.password !== password){
			
			return done(null,false,{validPassword: false})
		}
		
		user.password = "no passwords here >:D muahah";
		
		return done(null,user);
	}).catch(err=>{
		console.log("error: ",err);
	})
}

function processSignupCallback(req,username,password,done){
	User.findOne({
		where:{
			'username':username
		},
		attributes: ['id','username','password']
	}).then(function(user){
		if(user){
			console.log("username exists");
			return done(null,false,{usernameExists:true});
		}else{

			var userToCreate = req.body;
			User.create(userToCreate).then(function(createdRecord){
				createdRecord.password = "you can't see me!";
				console.log("created new user");
				return done(null,createdRecord);
			})

		}
	});
}

module.exports = {
	signupStrategy
}
