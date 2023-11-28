import ServiceBase from "../ServiceBase";
import { IOrder, IOrderRespo, IRespoBody } from "./types";

class OrderService extends ServiceBase {
  constructor() {
    super("http://localhost:8080", "/v1/gateway/");
  }

  private getAuthToken() {
    // Obtener el token almacenado en local storage
    const token = localStorage.getItem("token");
    return token ? `Bearer ${token}` : "";
  }

  createOrder = async ({
    partialPrice,
    idTable,
    idPayment,
    idUser,
    drinks,
  }): Promise<IOrder> => {
    const token = this.getAuthToken();
    const { data } = await this.client.post<IOrder>(
      "order/create",
      {
        partialPrice,
        idTable,
        idPayment,
        idUser,
        drinks,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  };

  createPayment = async ({ totalPrice, description }): Promise<IRespoBody> => {
    const token = this.getAuthToken();
    const { data } = await this.client.post<IRespoBody>(
      "payment/create",
      {
        totalPrice,
        description,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  };

  getByUserId = async (id): Promise<IOrderRespo[]> => {
    const token = this.getAuthToken();
    const { data } = await this.client.get<IOrderRespo[]>(
      `order/getByUser/${id}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  };
}
const ServiceOrder = new OrderService();
export default ServiceOrder;
