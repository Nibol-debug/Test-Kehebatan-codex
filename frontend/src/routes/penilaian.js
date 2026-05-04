const express = require('express');
const { requireAuth } = require('../middleware/auth');
const requirePermission = require('../middleware/permission');

const router = express.Router();

router.get('/', requireAuth, requirePermission('penilaian.read'), (req, res) => {
  res.render('penilaian/index', { title: 'Modul Penilaian' });
});

module.exports = router;
