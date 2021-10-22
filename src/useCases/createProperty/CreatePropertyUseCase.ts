import {
  IPropertiesRepository,
  ICreatePropertyDTO,
} from '../../repositories/IPropertiesRepository';

class CreatePropertyUseCase {
  constructor(private propertiesRepository: IPropertiesRepository) {}

  execute({ name, description }: ICreatePropertyDTO) {
    const propertyAlreadyExists = this.propertiesRepository.findByName(name);

    if (propertyAlreadyExists) {
      throw new Error('Property already exists!');
    }

    this.propertiesRepository.create({ name, description });
  }
}

export { CreatePropertyUseCase };
