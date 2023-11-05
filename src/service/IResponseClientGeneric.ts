import { Errors } from "./Errores/types";

export interface IResponseClientGeneric {
    body: object;
    errors: Errors;
  }
  