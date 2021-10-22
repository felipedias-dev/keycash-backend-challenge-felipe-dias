import { PropertiesRepository } from '../../repositories/PropertiesRepository';
import { ListPropertiesController } from './ListPropertiesController';
import { ListPropertiesUseCase } from './ListPropertiesUseCase';

const propertiesRepository = PropertiesRepository.getInstance();

const listPropertiesUseCase = new ListPropertiesUseCase(propertiesRepository);

const listPropertiesController = new ListPropertiesController(
  listPropertiesUseCase
);

export { listPropertiesController };
