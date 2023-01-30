import * as Yup from 'yup';

import { ProductsOptionsModel, ProductsModel } from './interfaces';

export const cartShapes = {
  //example:
  form: {
    //initial data for the form
    shape: {},

    //scheme for checking the form for errors
    schema: Yup.object().shape({}),
  },
};
