import ServiceBase from "../ServiceBase";
import { ILogin } from "./types";

class LoginService extends ServiceBase {
  constructor() {
    super("http://localhost:8080/", "v1/user/getById/{id}");
  }

  autenticacion = async (user, pass): Promise<string> => {
    const { data } = await this.client.post<string>("", 1);
    return data;
  };
}
const ServiceLogin = new LoginService();
export default ServiceLogin;
