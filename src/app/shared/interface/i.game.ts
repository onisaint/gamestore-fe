export interface IGame {
  type: string;
  id: string,
  name: string;
  description: string;
  price: [
      {
        amount: number,
        currency: string,
        includes_tax: boolean
      }
  ];
  status: string;
  commodity_type: string;
  stock: {
    level: number,
    availability: string
  };
}
