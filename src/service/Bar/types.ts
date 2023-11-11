export interface IBar {
  body: IBody[];
}

interface IBody {
  id: number;
  name: string;
  description: string;
  logo: string;
  latitude: number;
  longitude: number;
}
