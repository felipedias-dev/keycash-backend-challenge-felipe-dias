import { inject, injectable } from 'tsyringe';

import { Property } from '@modules/properties/infra/typeorm/entities/Property';
import { IPropertiesRepository } from '@modules/properties/infra/typeorm/repositories/IPropertiesRepository';

@injectable()
class ListOnePropertyUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute(id: string): Promise<Property> {
    const property = await this.propertiesRepository.findById(id);

    return property;
  }
}

export { ListOnePropertyUseCase };
