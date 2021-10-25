import { Property } from '../entities/Property';

interface ICreatePropertyDTO {
  title: string;
  description: string;
  category: string;
  area: number;
  useful_area: number;
  rooms: number;
  parking: number;
}
interface IUpdatePropertyDTO {
  id: string;
  title?: string;
  description?: string;
  category?: string;
  area?: number;
  useful_area?: number;
  rooms?: number;
  parking?: number;
}

interface IFilterPropertyDTO {
  useful_area?: number;
  rooms?: number;
  parking?: number;
}

interface IPropertiesRepository {
  create({
    title,
    description,
    category,
    area,
    useful_area,
    rooms,
    parking,
  }: ICreatePropertyDTO): Promise<Property>;

  // list(): Promise<Property[]>;

  findById(id: string): Promise<Property>;

  findByTitle(title: string): Promise<Property>;

  list({
    useful_area,
    rooms,
    parking,
  }: IFilterPropertyDTO): Promise<Property[]>;

  update({
    id,
    title,
    description,
    category,
    area,
    useful_area,
    rooms,
    parking,
  }: IUpdatePropertyDTO): Promise<void>;

  delete(id: string): Promise<void>;
}

export {
  IPropertiesRepository,
  ICreatePropertyDTO,
  IFilterPropertyDTO,
  IUpdatePropertyDTO,
};
