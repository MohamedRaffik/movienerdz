const path = require('path');
const express = require('express');
const app = express();
const PATH_DIR = process.env.NODE_ENV === 'production' ? 'build' : 'public';
const passport = require('passport');
const { db } = require('./models/index');
const strategy = require('./strategies/passport-local').signupStrategy(passport);
const api = require('./routes/index')(passport)
const port = process.env.PORT || 3000;
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const redis = require('redis');
const redisClient = redis.createClient(process.env.REDIS_URL);

app.use(express.json());
app.use(session({
  secret: 'secretkey',
  store: new redisStore({ client: redisClient }),
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', api);
app.use(express.static(path.join(__dirname, `client/build`)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `client/${PATH_DIR}/index.html`))
});

app.use((err, req, res, next) => {
  console.error('Error Fallback')
  console.error(err);
  res.status(err.status || 500).json(err);
});

db.sync().then(() => {
  console.log('Tables Synced')
  app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
  });
}).catch(err => console.error("LOL:",err));

