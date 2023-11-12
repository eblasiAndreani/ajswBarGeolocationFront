import ServiceBase from "../ServiceBase";
import { IResponsePayment, IResponseSandbox } from "./types";

class PaymentService extends ServiceBase {
  constructor() {
    super("http://localhost:8080/", "v1/gateway/payment");
  }

  createSanbox = async (price: number, description: string): Promise<IResponseSandbox> => {
    const { data } = await this.client.get<IResponseSandbox>(`getSandbox?price=${price}&description=${description}`);
    return data;
  };

  createPayment =async (totalPrice : number, description: string): Promise<IResponsePayment> => {
    const { data } = await this.client.post<IResponsePayment>("create", {
        totalPrice,
        description,
      });
    return data;
  }

}
const ServicePayment = new PaymentService();
export default ServicePayment;