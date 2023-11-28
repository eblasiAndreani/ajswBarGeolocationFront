import ServiceBase from "../ServiceBase";
import { IRespo } from "./types";

class LoginService extends ServiceBase {
  constructor() {
    super("http://localhost:8080/", "v1/login");
  }

  autenticacion = async (user, pass): Promise<IRespo> => {
    const { data } = await this.client.post<IRespo>("/postAuth", {
      user,
      pass,
    });
    return data;
  };
}
const ServiceLogin = new LoginService();
export default ServiceLogin;
