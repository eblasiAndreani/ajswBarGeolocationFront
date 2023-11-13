import ServiceBase from "../ServiceBase";
import { IPayment } from "./types";

class PaymentService extends ServiceBase {
  constructor() {
    super("http://localhost:8081", "/v1/payment/");
  }

  getSandBox = async (price, description): Promise<IPayment> => {
    const { data } = await this.client.get<IPayment>(
      `getSandbox?price=${price}&description=${description}`
    );
    return data;
  };
}
const ServicePayment = new PaymentService();
export default ServicePayment;
