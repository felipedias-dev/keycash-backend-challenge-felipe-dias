import { Router } from 'express';

import {
  createPropertyController,
  listPropertiesController,
} from '../useCases';

const propertiesRoutes = Router();

propertiesRoutes.post('/', (request, response) => {
  return createPropertyController.handle(request, response);
});

propertiesRoutes.get('/', (request, response) => {
  return listPropertiesController.handle(request, response);
});

export { propertiesRoutes };
