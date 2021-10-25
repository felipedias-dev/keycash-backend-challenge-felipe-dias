import { getRepository, Repository } from 'typeorm';

import { Property } from '../entities/Property';
import {
  IPropertiesRepository,
  ICreatePropertyDTO,
  IFilterPropertyDTO,
  IUpdatePropertyDTO,
} from './IPropertiesRepository';

class PropertiesRepository implements IPropertiesRepository {
  private repository: Repository<Property>;

  constructor() {
    this.repository = getRepository(Property);
  }

  async create({
    title,
    description,
    category,
    area,
    useful_area,
    rooms,
    parking,
  }: ICreatePropertyDTO): Promise<Property> {
    const property = this.repository.create({
      title,
      description,
      category,
      area,
      useful_area,
      rooms,
      parking,
    });

    await this.repository.save(property);

    return property;
  }

  // async list(): Promise<Property[]> {
  //   const properties = await this.repository.find();

  //   return properties;
  // }

  async findById(id: string): Promise<Property> {
    const property = await this.repository.findOne(id);

    return property;
  }

  async findByTitle(title: string): Promise<Property> {
    const property = await this.repository.findOne({ title });

    return property;
  }

  async list({
    useful_area,
    rooms,
    parking,
  }: IFilterPropertyDTO): Promise<Property[]> {
    const propertiesQuery = this.repository.createQueryBuilder('p');

    if (rooms) {
      propertiesQuery.andWhere('rooms = :rooms', { rooms });
    }

    if (useful_area) {
      propertiesQuery.andWhere('useful_area = :useful_area', { useful_area });
    }

    if (parking) {
      propertiesQuery.andWhere('parking = :parking', { parking });
    }

    const properties = await propertiesQuery.getMany();

    return properties;
  }

  async update({
    id,
    title,
    description,
    category,
    area,
    useful_area,
    rooms,
    parking,
  }: IUpdatePropertyDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        title,
        description,
        category,
        area,
        useful_area,
        rooms,
        parking,
      })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { PropertiesRepository };
