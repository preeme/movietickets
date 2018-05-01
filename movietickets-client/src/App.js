/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { StripeProvider } from 'react-stripe-elements';

import rootReducer from './rootReducer';
import Nav from './navbar/nav';
import Checkout from './checkout/Checkout';
import AuthForm from './login/AuthForm';
import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';

require('dotenv').config();

const middleware = [logger, thunk];

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route exact path="/movies/:id" component={MovieDetail} />
          <Route exact path="/signin" component={AuthForm} />
          <StripeProvider apiKey={stripeKey}>
            <Route exact path="/checkout" component={Checkout} />
          </StripeProvider>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
