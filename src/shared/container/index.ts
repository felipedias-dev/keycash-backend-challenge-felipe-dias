import { container, delay } from 'tsyringe';

import { IPropertiesRepository } from '@modules/properties/infra/typeorm/repositories/IPropertiesRepository';
import { PropertiesRepository } from '@modules/properties/infra/typeorm/repositories/PropertiesRepository';

container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  delay(() => PropertiesRepository)
);
