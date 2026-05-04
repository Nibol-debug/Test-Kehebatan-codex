const express = require('express');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', requireAuth, (req, res) => {
  res.render('dashboard/index', { title: 'Dashboard', error: null });
});

module.exports = router;
