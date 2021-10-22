import { Property } from '../../model/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';

class ListPropertiesUseCase {
  constructor(private propertiesRepository: IPropertiesRepository) {}

  execute(): Property[] {
    const properties = this.propertiesRepository.list();

    return properties;
  }
}

export { ListPropertiesUseCase };
