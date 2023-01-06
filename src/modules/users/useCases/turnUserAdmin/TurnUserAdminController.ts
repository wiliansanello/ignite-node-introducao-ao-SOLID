import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;

    try {
      const user = this.turnUserAdminUseCase.execute(id);
      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: `${err.message}` });
    }
  }
}

export { TurnUserAdminController };
