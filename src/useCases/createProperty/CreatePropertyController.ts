import { Request, Response } from 'express';

import { CreatePropertyUseCase } from './CreatePropertyUseCase';

class CreatePropertyController {
  constructor(private createPropertyUseCase: CreatePropertyUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createPropertyUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreatePropertyController };
