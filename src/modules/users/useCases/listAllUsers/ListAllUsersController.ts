import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;

    try {
      const usersList = this.listAllUsersUseCase.execute(id);

      return response.status(200).json(usersList);
    } catch (err) {
      return response.status(400).json({ error: `${err.message}` });
    }
  }
}

export { ListAllUsersController };
