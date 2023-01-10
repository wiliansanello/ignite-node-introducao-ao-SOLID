import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = String(user_id);

    try {
      const usersList = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(usersList);
    } catch (err) {
      return response.status(400).json({ error: `${err.message}` });
    }
  }
}

export { ListAllUsersController };
