function requireAuth(req, res, next) {
  if (req.session?.user) return next();
  return res.redirect('/login');
}

function injectLocals(req, res, next) {
  res.locals.user = req.session?.user || null;
  res.locals.permissions = req.session?.permissions || [];
  next();
}

module.exports = { requireAuth, injectLocals };
