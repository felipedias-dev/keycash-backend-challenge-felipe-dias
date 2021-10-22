import { Property } from '../model/Property';
import {
  IPropertiesRepository,
  ICreatePropertyDTO,
} from './IPropertiesRepository';

class PropertiesRepository implements IPropertiesRepository {
  private properties: Property[];
  private static INSTANCE: PropertiesRepository;

  private constructor() {
    this.properties = [];
  }

  public static getInstance(): PropertiesRepository {
    if (!PropertiesRepository.INSTANCE) {
      PropertiesRepository.INSTANCE = new PropertiesRepository();
    }

    return PropertiesRepository.INSTANCE;
  }

  create({ name, description }: ICreatePropertyDTO) {
    const property = new Property();

    Object.assign(property, {
      name,
      description,
      created_at: new Date(),
    });

    this.properties.push(property);
  }

  list(): Property[] {
    return this.properties;
  }

  findByName(name: string): Property {
    const property = this.properties.find((property) => property.name === name);

    return property;
  }
}

export { PropertiesRepository };
