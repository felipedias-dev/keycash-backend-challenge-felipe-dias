import { container } from 'tsyringe';

import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';
import { PropertiesRepository } from '../../repositories/PropertiesRepository';

container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  PropertiesRepository
);
