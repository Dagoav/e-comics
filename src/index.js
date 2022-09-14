import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/authContext'
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';


// const stripePromise = loadStripe("pk_test_51LfUl2GKiZGzVPFiXL66alIPbNJN4wqY9ZLCjUk9Uht9CDx2OQ1cvLZznwSIYlWeBUNRkMQNIXqIm6huk4JqOnIb00UB9E1Ck8")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <AuthContextProvider>
      <Provider store={store}>
        {/* <Elements stripe={stripePromise}> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </Elements> */}
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
