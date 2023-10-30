import ServiceBase from '../ServiceBase';
import { ITable } from './types';

class TableService extends ServiceBase {
  constructor() {
    super('http://localhost:3001/', 'table');
  }

  getTableByBar = async (idBar): Promise<ITable[]> => {
    const response = await this.client.get<ITable[]>('');
    return response.data;
  };
}

const ServiceTable = new TableService();
export default ServiceTable;
