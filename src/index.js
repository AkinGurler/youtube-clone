import React from "react";
import ReactDOM from "react-dom/client"
import { applyMiddleware, createStore } from "redux";
import store from "./store";
import { Provider } from 'react-redux'
import App from "./App";
import './index.css';

/* we need a store */


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store ={store}>
        <App/>
    </Provider>


)