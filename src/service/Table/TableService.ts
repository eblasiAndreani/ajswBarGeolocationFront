import ServiceBase from "../ServiceBase";
import { ITable } from "./types";

class TableService extends ServiceBase {
  constructor() {
    super("http://localhost:8080", "/v1/gateway/table/");
  }

  private getAuthToken() {
    // Obtener el token almacenado en local storage
    const token = localStorage.getItem("token");
    return token ? `Bearer ${token}` : "";
  }

  getTableByBar = async (idBar): Promise<ITable[]> => {
    const response = await this.client.get<ITable[]>(`getByBar/${idBar}`);
    return response.data;
  };

  updateTable = async (idTable): Promise<Boolean> => {
    const token = this.getAuthToken();
    const response = await this.client.get<Boolean>(
      `update/${idTable}` /* , {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    } */
    );
    return response.data;
  };
}

const ServiceTable = new TableService();
export default ServiceTable;
