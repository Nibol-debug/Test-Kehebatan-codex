require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const authRoutes = require('./src/routes/auth');
const dashboardRoutes = require('./src/routes/dashboard');
const penilaianRoutes = require('./src/routes/penilaian');
const adminRoutes = require('./src/routes/admin');
const { injectLocals } = require('./src/middleware/auth');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({ secret: process.env.SESSION_SECRET || 'dev-secret', resave: false, saveUninitialized: false }));
app.use('/public', express.static(__dirname + '/src/public'));
app.use(injectLocals);

app.get('/', (req, res) => res.redirect('/dashboard'));
app.use('/', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/penilaian', penilaianRoutes);
app.use('/admin', adminRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Frontend SSR ready on :${port}`));
}

module.exports = app;
