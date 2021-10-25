import { Router } from 'express';

import { CreatePropertyController } from '@modules/properties/useCases/createProperty/CreatePropertyController';
import { DeletePropertyController } from '@modules/properties/useCases/deleteProperty/DeletePropertyController';
import { ListOnePropertyController } from '@modules/properties/useCases/listOneProperty/ListOnePropertyController';
import { ListPropertiesController } from '@modules/properties/useCases/listProperties/ListPropertiesController';
import { UpdatePropertyController } from '@modules/properties/useCases/updateProperty/UpdatePropertyController';

const propertiesRoutes = Router();

const createPropertyController = new CreatePropertyController();
const updatePropertyController = new UpdatePropertyController();
const listPropertiesController = new ListPropertiesController();
const listOnePropertyController = new ListOnePropertyController();
const deletePropertyController = new DeletePropertyController();

propertiesRoutes.post('/', createPropertyController.handle);

propertiesRoutes.get('/', listPropertiesController.handle);

propertiesRoutes.get('/:id', listOnePropertyController.handle);

propertiesRoutes.put('/:id', updatePropertyController.handle);

propertiesRoutes.delete('/:id', deletePropertyController.handle);

export { propertiesRoutes };
