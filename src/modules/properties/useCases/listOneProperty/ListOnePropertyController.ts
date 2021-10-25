import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListOnePropertyUseCase } from './ListOnePropertyUseCase';

class ListOnePropertyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listOnePropertyUseCase = container.resolve(ListOnePropertyUseCase);

    const property = await listOnePropertyUseCase.execute(id);

    return response.json(property);
  }
}

export { ListOnePropertyController };
