import { ProductsModel, ProductsOptionsModel } from '@redux/cart/interfaces';
import { loadingDelay, products, productsOptions } from '@utils/data';
import { FilterResult } from './interfaces';

export default class ProductsApi {
  static getProductsList(): Promise<FilterResult<ProductsModel>> {
    return new Promise((res) => {
      setTimeout(
        () =>
          res({
            result: products,
            total: products.length,
          }),
        loadingDelay,
      );
    });
  }
  static getProductsOptionsList(): Promise<FilterResult<ProductsOptionsModel>> {
    return new Promise((res) => {
      setTimeout(
        () =>
          res({
            result: productsOptions,
            total: productsOptions.length,
          }),
        loadingDelay,
      );
    });
  }
}
