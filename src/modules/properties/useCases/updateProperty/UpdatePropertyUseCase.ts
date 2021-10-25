import { inject, injectable } from 'tsyringe';

import {
  IPropertiesRepository,
  IUpdatePropertyDTO,
} from '@modules/properties/infra/typeorm/repositories/IPropertiesRepository';
import { APIError } from '@shared/errors/APIError';

@injectable()
class UpdatePropertyUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute({
    id,
    title,
    description,
    category,
    area,
    useful_area,
    rooms,
    parking,
  }: IUpdatePropertyDTO) {
    const propertyExists = await this.propertiesRepository.findById(id);

    if (!propertyExists) {
      throw new APIError('Property does not exist!', 400);
    }

    await this.propertiesRepository.update({
      id,
      title,
      description,
      category,
      area,
      useful_area,
      rooms,
      parking,
    });
  }
}

export { UpdatePropertyUseCase };
