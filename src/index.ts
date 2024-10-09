import { Elysia } from 'elysia';
import { okResponse } from './utils/response';

const app = new Elysia()
  .get('/', () => {
    return okResponse(null);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
