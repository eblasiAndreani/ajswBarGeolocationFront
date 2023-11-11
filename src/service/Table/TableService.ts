import ServiceBase from "../ServiceBase";
import { ITable } from "./types";

class TableService extends ServiceBase {
  constructor() {
    super("http://localhost:8080", "/v1/gateway/table/");
  }

  getTableByBar = async (idBar): Promise<ITable[]> => {
    const response = await this.client.get<ITable[]>(`getByBar/${idBar}`);
    return response.data;
  };
}

const ServiceTable = new TableService();
export default ServiceTable;
