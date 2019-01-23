const path = require('path');
const express = require('express');
const app = express();
const api = require('./routes/index');
const PATH_DIR = process.env.NODE_ENV === 'production' ? 'build' : 'public';

const axios = require('axios')

var passport = require('passport');

const db = require('./models/index').db;





app.use(passport.initialize());

require('./strategies/passport-local').signupStrategy(passport);




app.use(express.json());

var userRoutes = require('./routes/user').signup(passport);
var loginRoutes = require('./routes/user').login(passport);



app.use('/auth/login',loginRoutes);
app.use('/auth',userRoutes);


app.use('/api', api);
app.use(express.static(path.join(__dirname, `client/${PATH_DIR}`)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `client/${PATH_DIR}/index.html`))
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status).send(err.message);
});

db.sync().then(() => console.log('Tables Synced')).catch(err => console.error("LOL:",err));

app.listen(3000, () => {
  console.log('Listening on Port 3000');
})