import ServiceBase from "../ServiceBase";
import { IBar } from "./types";

class BarService extends ServiceBase {
  constructor() {
    super("http://localhost:8080", "/v1/gateway/bar/");
  }
  getAll = async (): Promise<IBar[]> => {
    const { data } = await this.client.get<IBar[]>("getAll");
    return data;
  };

  getBarsByLocation = async (
    latitude,
    longitude,
    distance
  ): Promise<IBar[]> => {
    const { data } = await this.client.get<IBar[]>(
      `/getByLocation?latitude=${latitude}&longitude=${longitude}&distance=${distance}`
    );
    return data;
  };
}
const ServiceBar = new BarService();
export default ServiceBar;
