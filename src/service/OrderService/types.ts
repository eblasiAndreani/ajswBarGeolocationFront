export interface IOrder {
  partialPrice: number;
  idTable: number;
  idPayment: number;
  idUser: number;
  drinks: IDrink[];
}

export interface IPayment {
  totalPrice: number;
  description: string;
}

interface IDrink {
  amount: number;
  drink: number;
}

export interface IRespoBody {
  body: IBody;
}

interface IBody {
  id: number;
  description: string;
  totalPrice: number;
}

export interface IOrderRespo {
  body: IOrderBody;
}

export interface IOrderBody {
  id: number;
  partialPrice: number;
  idTable: ITable;
  idPayment: number;
  idUser: number;
}

interface ITable {
  id: number;
  dispose: boolean;
  chair: number;
  bar: IBar;
}

interface IBar {
  id: number;
  name: string;
  description: string;
  logo: string;
}
