import axios, { AxiosInstance } from 'axios';

export default abstract class ServiceBase {
  protected readonly client: AxiosInstance;

  constructor(uri: string, endpoint: string) {
    this.client = axios.create({
      baseURL: `${uri}${endpoint}`, // Reemplaza con tu variable de entorno
    });
  }
}
