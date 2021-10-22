import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerConfig from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(router);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(3333, () => console.log('Server is running!'));
