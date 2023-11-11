import ServiceBase from "../ServiceBase";
import { IDrink } from "./types";

class DrinkService extends ServiceBase {
  constructor() {
    super("http://localhost:8080", "/v1/gateway/drink/");
  }

  getDrinkByBar = async (idBar): Promise<IDrink[]> => {
    const response = await this.client.get<IDrink[]>(`getByBar/${idBar}`);
    return response.data;
  };
}

const ServiceDrink = new DrinkService();
export default ServiceDrink;
