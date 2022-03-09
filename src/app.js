const express = require('express');
const cors = require('cors');
const session = require('express-session');
const methodOverride = require('method-override');
const cookie = require('cookie-parser');

const path = require('path');
const app = express();

const indexRoute = require('./routes/indexRoute');
const login = require('./routes/login');
const register = require('./routes/register');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(
  session({ secret: 'Secret Message', resave: false, saveUninitialized: false })
);
app.use(cookie());
app.use(cors());
app.use(express.json());

app.use('/', indexRoute);
app.use(login);
app.use(register);
app.use((req, res, next) => {
  res.status(404).render('./404/404');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor 3000 ACTIVADO');
});
