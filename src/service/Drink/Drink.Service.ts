import ServiceBase from '../ServiceBase';
import { IDrink } from './types';

class DrinkService extends ServiceBase {
  constructor() {
    super('http://localhost:3001/', 'drink');
  }

  getDrinkByBar = async (idBar): Promise<IDrink[]> => {
    const response = await this.client.get<IDrink[]>('');
    return response.data;
  };
}

const ServiceDrink = new DrinkService();
export default ServiceDrink;