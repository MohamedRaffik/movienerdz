const bcrypt = require('bcrypt');
var passport = require('passport');
// import User from '../models/User';
const User = require('../models/User').User;
console.log("hello world",User);

passport.use(new LocalStrategy((username,password,done)=>{
	User.findOne({
		where:{
			"username": username
		}
	})
	.then(user=>{
		if(user == null){
			return done(null,false,{message:"user not found"});
		}
		if(!user.validPassword(password)){
			return done(null,false,{message:"wrong password"});
		}
		return done(null,user);

	})
	.catch(err=>{
		console.log("error querying database");
	})
	
}))
modules.exports = passport;
// export default passport;