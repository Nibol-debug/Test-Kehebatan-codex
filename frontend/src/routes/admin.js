const express = require('express');
const { requireAuth } = require('../middleware/auth');
const requirePermission = require('../middleware/permission');

const router = express.Router();

router.get('/rbac', requireAuth, requirePermission('rbac.manage'), (req, res) => {
  res.render('admin/rbac', { title: 'RBAC Dinamis' });
});

module.exports = router;
