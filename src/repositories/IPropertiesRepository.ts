import { Property } from '../model/Property';

interface ICreatePropertyDTO {
  name: string;
  description: string;
}

interface IPropertiesRepository {
  create({ name, description }: ICreatePropertyDTO): void;

  list(): Property[];

  findByName(name: string): Property;
}

export { IPropertiesRepository, ICreatePropertyDTO };
