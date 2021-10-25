import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePropertyUseCase } from './UpdatePropertyUseCase';

class UpdatePropertyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, description, category, area, useful_area, rooms, parking } =
      request.body;

    const updatePropertyUseCase = container.resolve(UpdatePropertyUseCase);

    await updatePropertyUseCase.execute({
      id,
      title,
      description,
      category,
      area,
      useful_area,
      rooms,
      parking,
    });

    return response.status(204).send();
  }
}

export { UpdatePropertyController };
