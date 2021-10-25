import { Router } from 'express';

import { propertiesRoutes } from './properties.routes';

const router = Router();

router.use('/properties', propertiesRoutes);

export { router };
