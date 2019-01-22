import Router from './index';
import User from '../models/User';
import passport from '../passport/setupPassport';


//Registration Routes
Router.get('/register',(req,res)=>{
	if(req.user){
		res.redirect('/');
	}
})


Router.post('/register',(req,res)=>{
	passport.authenticate('local', 
	{
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	
	});
});



//Login Routes
Router.get('/login',(req,res)=>{
	if(req.user){
		res.redirect('/');
	}else {
		res.sendStatus(200);
	}
})

Router.get('/logout',(req,res)=>{
	req.session.destroy();
	req.logout();
	res.redirect('/');
})


