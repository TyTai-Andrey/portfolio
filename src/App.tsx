import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import About from '@pages/About';
import Home from '@pages/Home';
import Products from '@pages/Products';
import Pay from '@pages/Pay';
import NewsPage from '@pages/NewsPage';
import Contacts from '@pages/Contacts';
import ErrorPage from '@pages/ErrorPage';
import ProductPage from '@pages/ProductPage';
import NewItemPage from '@pages/NewItemPage';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import styles from './App.module.scss';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <div className={styles.root}>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/products'} exact component={Products} />
          <Route path={'/product/:id'} component={ProductPage} />
          <Route path={'/pay'} component={Pay} />
          <Route path={'/news'} component={NewsPage} />
          <Route path={'/new/:id'} component={NewItemPage} />
          <Route path={'/about'} component={About} />
          <Route path={'/contacts'} component={Contacts} />

          <Route component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
