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

    const propertyToUpdate = {
      id,
      title: title || propertyExists.title,
      description: description || propertyExists.description,
      category: category || propertyExists.category,
      area: area || propertyExists.area,
      useful_area: useful_area || propertyExists.useful_area,
      rooms: rooms || propertyExists.rooms,
      parking: parking || propertyExists.parking,
    };

    await this.propertiesRepository.update(propertyToUpdate);
  }
}

export { UpdatePropertyUseCase };
