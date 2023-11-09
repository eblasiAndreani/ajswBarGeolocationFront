import ServiceBase from "../ServiceBase";
import { IUser } from "./types";

class UserService extends ServiceBase {
  constructor() {
    super("http://localhost:8080/", "v1/user/");
  }

  autenticacion = async ({
    user,
    pass,
    name,
    surname,
    role,
  }): Promise<IUser> => {
    const { data } = await this.client.post<IUser>("create", {
      user,
      pass,
      name,
      surname,
      role,
    });
    return data;
  };
}
const ServiceUser = new UserService();
export default ServiceUser;
