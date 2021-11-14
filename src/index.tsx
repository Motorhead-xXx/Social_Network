import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

import {Provider} from "react-redux";
import {store} from "./store/store";


let rerenderEntireTree = () => {
    ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
        , document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(()=>{
    rerenderEntireTree()
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
