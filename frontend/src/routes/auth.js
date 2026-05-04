const express = require('express');
const { createApiClient } = require('../services/apiClient');

const router = express.Router();

router.get('/login', (req, res) => res.render('auth/login', { title: 'Login', error: null }));

router.post('/login', async (req, res) => {
  try {
    const api = createApiClient(req);
    const { data } = await api.post('/auth/login', req.body);
    req.session.user = data.user;
    req.session.permissions = data.permissions || [];
    res.cookie('syiar_token', data.token, { httpOnly: true, sameSite: 'strict', secure: false });
    res.redirect('/dashboard');
  } catch (error) {
    res.status(401).render('auth/login', { title: 'Login', error: 'Login gagal, periksa akun Anda.' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('syiar_token');
    res.redirect('/login');
  });
});

module.exports = router;
