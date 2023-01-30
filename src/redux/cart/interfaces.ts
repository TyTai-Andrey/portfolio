export type ProductsOptionsModel = {
  id: number;
  iconAction: boolean;
  iconHit: boolean;
  iconBestPrice: boolean;
  oldPrice: number | null;
};

export type ProductsModel = {
  id: number;
  productPhoto: string;
  title: string;
  description: string;
  price: number;
  showPrice: string;
};
