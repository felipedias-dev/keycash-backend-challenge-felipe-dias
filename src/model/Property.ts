import { v4 as uuidV4 } from 'uuid';

class Property {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.updated_at = new Date();
  }
}

export { Property };
