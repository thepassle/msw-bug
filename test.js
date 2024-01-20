import { registerMockRoutes } from '@web/mocks/browser.js';
import { http } from '@web/mocks/http.js';

describe('test', () => {
  it('api', async () => {
    registerMockRoutes(http.get('/api/foo', () => Response.json({ foo: 'foo' })));

    const response = await fetch('/api/foo').then(r => r.json());
    if(response.foo !== 'foo') {
      throw new Error('response.foo !== "foo"');
    }  
  });
});