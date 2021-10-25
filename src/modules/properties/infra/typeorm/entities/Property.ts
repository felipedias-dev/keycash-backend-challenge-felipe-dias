import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('properties')
class Property {
  @PrimaryColumn()
  id?: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  area: number;

  @Column()
  useful_area: number;

  @Column()
  rooms: number;

  @Column()
  parking: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Property };
