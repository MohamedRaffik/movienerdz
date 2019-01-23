const path = require('path');
const express = require('express');
const app = express();
const PATH_DIR = process.env.NODE_ENV === 'production' ? 'build' : 'public';
const axios = require('axios')
const passport = require('passport');
const db = require('./models/index').db;

app.use(express.json());
app.use(passport.initialize());
require('./strategies/passport-local').signupStrategy(passport);

const api = require('./routes/index')(passport);


app.use('/api', api);
app.use(express.static(path.join(__dirname, `client/${PATH_DIR}`)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `client/${PATH_DIR}/index.html`))
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
});

db.sync().then(() => console.log('Tables Synced')).catch(err => console.error("LOL:",err));

app.listen(3000, () => {
  console.log('Listening on Port 3000');
})