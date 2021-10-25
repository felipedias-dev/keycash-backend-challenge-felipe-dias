import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePropertyUseCase } from './CreatePropertyUseCase';

class CreatePropertyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, category, area, useful_area, rooms, parking } =
      request.body;

    const createPropertyUseCase = container.resolve(CreatePropertyUseCase);

    const property = await createPropertyUseCase.execute({
      title,
      description,
      category,
      area,
      useful_area,
      rooms,
      parking,
    });

    return response.status(201).json(property);
  }
}

export { CreatePropertyController };
