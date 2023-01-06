import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    if (user.admin === false) {
      throw new Error("This user haven't permission to get the users list");
    }

    const list = this.usersRepository.list();

    return list;
  }
}

export { ListAllUsersUseCase };
