import ServiceBase from "../ServiceBase";
import { IOrder, IOrderRespo, IRespoBody } from "./types";

class OrderService extends ServiceBase {
  constructor() {
    super("http://localhost:8080", "/v1/gateway/");
  }

  createOrder = async ({
    partialPrice,
    idTable,
    idPayment,
    idUser,
    drinks,
  }): Promise<IOrder> => {
    const { data } = await this.client.post<IOrder>("order/create", {
      partialPrice,
      idTable,
      idPayment,
      idUser,
      drinks,
    });
    return data;
  };

  createPayment = async ({ totalPrice, description }): Promise<IRespoBody> => {
    const { data } = await this.client.post<IRespoBody>("payment/create", {
      totalPrice,
      description,
    });
    return data;
  };

  getByUserId = async (id): Promise<IOrderRespo[]> => {
    const { data } = await this.client.get<IOrderRespo[]>(
      `order/getByUser/${id}`
    );
    return data;
  };
}
const ServiceOrder = new OrderService();
export default ServiceOrder;
