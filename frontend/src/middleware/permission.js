module.exports = (permissionCode) => (req, res, next) => {
  const userPerms = req.session?.permissions || [];
  if (userPerms.includes(permissionCode)) return next();
  return res.status(403).render('dashboard/index', {
    title: 'Dashboard',
    error: `Akses ditolak untuk permission: ${permissionCode}`
  });
};
