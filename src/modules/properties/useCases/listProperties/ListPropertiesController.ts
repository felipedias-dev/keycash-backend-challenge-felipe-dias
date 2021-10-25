import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPropertiesUseCase } from './ListPropertiesUseCase';

class ListPropertiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { useful_area, rooms, parking } = request.query;

    const listPropertyUseCase = container.resolve(ListPropertiesUseCase);

    const properties = await listPropertyUseCase.execute({
      useful_area: useful_area as unknown as number,
      rooms: rooms as unknown as number,
      parking: parking as unknown as number,
    });

    return response.json(properties);
  }
}

export { ListPropertiesController };
