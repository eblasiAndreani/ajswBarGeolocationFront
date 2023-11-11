import ServiceBase from "../ServiceBase";
import { IBar } from "./types";

class BarService extends ServiceBase {
  constructor() {
    //super('http://localhost:8080/', 'v1/gateway/bar/getAll');
    super("http://localhost:8080", "/v1/gateway/bar/");
  }

  /* getAll = async (): Promise<IGetAllResponse<IBar>> => {
    const { data } = await this.client.get<IResponseClientGetAll<IBar>>("");

    return { data: data.body, totalCount: data.body.length };
  }; */
  getAll = async (): Promise<IBar[]> => {
    const { data } = await this.client.get<IBar[]>("getAll");
    console.log("Esta es la data: ", data);
    return data;
  };

  getBarsByLocation = async (latitude, longitude): Promise<IBar[]> => {
    // Aquí debes implementar la lógica para buscar bares dentro de un rango específico
    // Puedes hacer una solicitud al servidor con los parámetros de latitud y longitud
    // y devolver la lista de bares que cumplan con esos criterios.
    // Ejemplo ficticio:
    //const response = await this.client.get<IBar[]>(`/search?lat=${latitude}&lon=${longitude}`);
    const response = await this.client.get<IBar[]>("");
    return response.data;
  };
}
const ServiceBar = new BarService();
export default ServiceBar;
