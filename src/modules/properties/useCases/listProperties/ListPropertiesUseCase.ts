import { inject, injectable } from 'tsyringe';

import { Property } from '@modules/properties/infra/typeorm/entities/Property';
import {
  IPropertiesRepository,
  IFilterPropertyDTO,
} from '@modules/properties/infra/typeorm/repositories/IPropertiesRepository';

@injectable()
class ListPropertiesUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute({
    useful_area,
    rooms,
    parking,
  }: IFilterPropertyDTO): Promise<Property[]> {
    const properties = await this.propertiesRepository.list({
      useful_area,
      rooms,
      parking,
    });

    return properties;
  }
}

export { ListPropertiesUseCase };
