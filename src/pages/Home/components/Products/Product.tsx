import React, { useCallback, useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { basketActions } from '@redux/basket/actions';
import Skeleton from '@mui/material/Skeleton';
import { numberInPrice } from '@utils/func';
import { useSnackbar } from 'notistack';

type ProductProps = {
  product: any;
  extraParams?: any;
};

const Product: React.FC<ProductProps> = ({ product, extraParams }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const photo = {
    background: `url('${product?.productPhoto}') center`,
    backgroundSize: 'cover',
  };

  const dispatch = useDispatch();

  const addProduct = useCallback(() => {
    enqueueSnackbar('Данные отправлены', {
      variant: 'success',
      onClick: () => closeSnackbar(),
    });
    dispatch(
      basketActions.addProduct({
        id: product.id,
        price: product.price,
        productPhoto: product.productPhoto,
        title: product.title,
      }),
    );
  }, [product]);

  return (
    <div className='product'>
      <div className='product-photo' style={photo}>
        {extraParams && (
          <div className='rowIcons'>
            {extraParams.iconAction && (
              <div className='rowIcons-icon action'>Акция</div>
            )}
            {extraParams.iconHit && (
              <div className='rowIcons-icon hit'>Хит</div>
            )}
            {extraParams.iconBestPrice && (
              <div className='rowIcons-icon bestPrice'>Лучшая цена</div>
            )}
          </div>
        )}
      </div>
      <div className='product-middle'>
        <div className='product-text'>
          <h3>
            <NavLink to={`/product/${product.id}`}>{product.title}</NavLink>
          </h3>
          <p className='ltl-grey'>{product.description}</p>
        </div>
        <div className='product-footer'>
          <div className='price'>
            {extraParams?.oldPrice && (
              <div className='price-old'>
                <span className='diagonale'></span>
                <span>{numberInPrice(extraParams.oldPrice)}</span>
                <i className='fas fa-ruble-sign'></i>
              </div>
            )}
            <div className='price-new'>
              <span>{numberInPrice(product.price)}</span>
              <i className='fas fa-ruble-sign'></i>
            </div>
          </div>
          <div className='iconBuy' onClick={addProduct}>
            <div className='btn btn-blue icon'>
              <div className='btn-content'>
                <i className='fa fa-shopping-cart' aria-hidden='true'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
