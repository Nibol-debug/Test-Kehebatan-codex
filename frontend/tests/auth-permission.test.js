const test = require('node:test');
const assert = require('node:assert/strict');
const { requireAuth } = require('../src/middleware/auth');
const requirePermission = require('../src/middleware/permission');

test('requireAuth allows authenticated user', () => {
  let nextCalled = false;
  requireAuth({ session: { user: { id: 1 } } }, {}, () => { nextCalled = true; });
  assert.equal(nextCalled, true);
});

test('requirePermission rejects missing permission', () => {
  let statusCode = 200;
  const res = {
    status(code) { statusCode = code; return this; },
    render() { return this; }
  };
  requirePermission('penilaian.create')({ session: { permissions: [] } }, res, () => {});
  assert.equal(statusCode, 403);
});
