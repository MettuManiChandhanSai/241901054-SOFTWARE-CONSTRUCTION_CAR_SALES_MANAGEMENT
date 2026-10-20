const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/server');

function get(server, urlPath) {
  return fetch(`http://127.0.0.1:${server.address().port}${urlPath}`);
}

test('home page returns the Car Sales Management page', async () => {
  const server = createServer().listen(0);
  try {
    const res = await get(server, '/');
    assert.strictEqual(res.status, 200);
    assert.match(await res.text(), /Car Sales Management/);
  } finally {
    server.close();
  }
});

test('health endpoint reports ok', async () => {
  const server = createServer().listen(0);
  try {
    const res = await get(server, '/health');
    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(await res.json(), { status: 'ok', app: 'car-sales-management' });
  } finally {
    server.close();
  }
});
