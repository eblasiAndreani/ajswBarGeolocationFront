import { Errors } from "./Errores/types";

export interface IResponseClientGetAll<T> {
    body: T[];
    errors: Errors;
  }
  