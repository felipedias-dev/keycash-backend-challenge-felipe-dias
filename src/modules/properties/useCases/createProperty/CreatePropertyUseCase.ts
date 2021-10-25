import { inject, injectable } from 'tsyringe';

import {
  IPropertiesRepository,
  ICreatePropertyDTO,
} from '@modules/properties/infra/typeorm/repositories/IPropertiesRepository';
import { APIError } from '@shared/errors/APIError';

@injectable()
class CreatePropertyUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute({
    title,
    description,
    category,
    area,
    useful_area,
    rooms,
    parking,
  }: ICreatePropertyDTO) {
    const propertyAlreadyExists = await this.propertiesRepository.findByTitle(
      title
    );

    if (propertyAlreadyExists) {
      throw new APIError('Property already exists!', 409);
    }

    const property = await this.propertiesRepository.create({
      title,
      description,
      category,
      area,
      useful_area,
      rooms,
      parking,
    });

    return property;
  }
}

export { CreatePropertyUseCase };
