import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { Auth0Provider } from '@auth0/auth0-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const providerConfig = {
  domain: "dev-dme2agps.us.auth0.com",
  clientId: "KGHYE5uXq8zYlmfaaa1oMTLlxLlc1Unh",
  redirectUri: window.location.origin,
};

const stripePromise = loadStripe("pk_test_51LfUl2GKiZGzVPFiXL66alIPbNJN4wqY9ZLCjUk9Uht9CDx2OQ1cvLZznwSIYlWeBUNRkMQNIXqIm6huk4JqOnIb00UB9E1Ck8")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      {/* <Auth0Provider {...providerConfig}>*/}
      <Elements stripe={stripePromise}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
       </Elements>
     {/* </Auth0Provider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
