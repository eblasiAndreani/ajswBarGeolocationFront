import ServiceBase from '../ServiceBase';
import { ILogin } from './types';

class LoginService extends ServiceBase {
  constructor() {
    super('http://localhost:8080/', 'login');
  }

  autenticacion = async (user: ILogin): Promise<string> => {
    const { data } = await this.client.post<string>('user', { user });
    return data;
  };
}
const ServiceLogin = new LoginService();
export default ServiceLogin;
