import ServiceBase from '../ServiceBase';
import { IBar } from './types';
import { IGetAllResponse } from '../types';

class BarService extends ServiceBase {
  constructor() {
    super('http://localhost:3001/', 'bars');
  }

  getAll = async (): Promise<IGetAllResponse<IBar>> => {
    const { data } = await this.client.get<IBar[]>('');

    return { data: data, totalCount: data.length };
  };

  getBarsByLocation = async (latitude, longitude): Promise<IBar[]> => {
    // Aquí debes implementar la lógica para buscar bares dentro de un rango específico
    // Puedes hacer una solicitud al servidor con los parámetros de latitud y longitud
    // y devolver la lista de bares que cumplan con esos criterios.
    // Ejemplo ficticio:
    //const response = await this.client.get<IBar[]>(`/search?lat=${latitude}&lon=${longitude}`);
    const response = await this.client.get<IBar[]>('');
    return response.data;
  };
}
const ServiceBar = new BarService();
export default ServiceBar;
