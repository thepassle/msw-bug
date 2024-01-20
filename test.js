import { registerMockRoutes } from '@web/mocks/browser.js';
import { http } from '@web/mocks/http.js';

describe('test', () => {
  it('api', async () => {
    registerMockRoutes(http.get('/api/foo', () => Response.json({ foo: 'foo' })));

    const response = await fetch('/api/foo').then(r => r.json());
    expect(response.foo).to.equal('foo');
  });
});