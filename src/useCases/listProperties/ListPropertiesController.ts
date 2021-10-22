import { Request, Response } from 'express';

import { ListPropertiesUseCase } from './ListPropertiesUseCase';

class ListPropertiesController {
  constructor(private listPropertyUseCase: ListPropertiesUseCase) {}

  handle(request: Request, response: Response) {
    const properties = this.listPropertyUseCase.execute();

    return response.json(properties);
  }
}

export { ListPropertiesController };
