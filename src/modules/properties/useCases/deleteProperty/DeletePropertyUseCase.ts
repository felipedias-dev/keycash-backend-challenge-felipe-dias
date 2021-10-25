import { inject, injectable } from 'tsyringe';

import { IPropertiesRepository } from '@modules/properties/infra/typeorm/repositories/IPropertiesRepository';
import { APIError } from '@shared/errors/APIError';

@injectable()
class DeletePropertyUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute(id: string) {
    const propertyExists = await this.propertiesRepository.findById(id);

    if (!propertyExists) {
      throw new APIError('Property does not exist!', 400);
    }

    await this.propertiesRepository.delete(id);
  }
}

export { DeletePropertyUseCase };
