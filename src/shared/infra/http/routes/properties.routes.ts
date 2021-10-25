import { Router } from 'express';

import { CreatePropertyController } from '@modules/properties/useCases/createProperty/CreatePropertyController';
import { DeletePropertyController } from '@modules/properties/useCases/deleteProperty/DeletePropertyController';
import { ListPropertiesController } from '@modules/properties/useCases/listProperties/ListPropertiesController';
import { UpdatePropertyController } from '@modules/properties/useCases/updateProperty/UpdatePropertyController';

const propertiesRoutes = Router();

const createPropertyController = new CreatePropertyController();
const updatePropertyController = new UpdatePropertyController();
const listPropertiesController = new ListPropertiesController();
const deletePropertyController = new DeletePropertyController();

propertiesRoutes.post('/', createPropertyController.handle);

propertiesRoutes.get('/', listPropertiesController.handle);

propertiesRoutes.put('/', updatePropertyController.handle);

propertiesRoutes.delete('/', deletePropertyController.handle);

export { propertiesRoutes };
