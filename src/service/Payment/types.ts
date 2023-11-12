export interface IResponseSandbox {
    body: IBodySandbox;
  }
  
  interface IBodySandbox {
    sandboxInit: string;
  }

  export interface IResponsePayment{
    body : IPayment
  }
  
  interface IPayment {
    id: number,
    description: string,
    totalPrice: number
  }