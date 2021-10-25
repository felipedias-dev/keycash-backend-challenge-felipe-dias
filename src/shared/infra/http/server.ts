import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from 'swagger.json';

import 'express-async-errors';
import '@shared/infra/typeorm';
import '@shared/container';

import { APIError } from '@shared/errors/APIError';
import { router } from '@shared/infra/http/routes';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(router);
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof APIError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(3333, () => console.log('Server is running!'));
