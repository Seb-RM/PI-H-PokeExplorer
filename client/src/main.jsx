/* eslint-disable no-unused-vars */
import React from 'react'

import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import store from "./redux/store/index.js"

import './index.css'

axios.defaults.baseURL = "https://pi-h-pokeexplorer-production.up.railway.app/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
