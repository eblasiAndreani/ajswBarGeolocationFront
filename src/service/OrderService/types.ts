export interface IOrder {
  partialPrice: number;
  fechaAlta: Date;
  idTable: number;
  idPayment: number;
  idUser: string;
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
  idUser: string;
  drinks: IDrinkDto[];
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

interface IDrinkDto {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  amount: number;
}
