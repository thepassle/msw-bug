import { http } from 'msw';
import { setupWorker } from 'msw/browser';

const worker = setupWorker();
worker
  .start({
    serviceWorker: {
      url: './mockServiceWorker.js',
    },
  });

describe('test', () => {
  it('api', async () => {
    worker.use(http.get('/api/foo', () => Response.json({ foo: 'foo' })));

    const response = await fetch('/api/foo').then(r => r.json());
    if(response.foo !== 'foo') {
      throw new Error('response.foo !== "foo"');
    }  
  });
});