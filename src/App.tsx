import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// pages
import About from '@pages/About';
import Home from '@pages/Home';
import Products from '@pages/Products';
import Pay from '@pages/Pay';
import Saveguard from '@pages/Saveguard';
import Contacts from '@pages/Contacts';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import styles from './App.module.scss';
import ProductPage from '@pages/ProductPage';

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
          <Route path={'/saveguard'} component={Saveguard} />
          <Route path={'/about'} component={About} />
          <Route path={'/contacts'} component={Contacts} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
