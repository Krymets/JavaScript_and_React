import  React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from "./App";

// import reportWebVitals from './reportWebVitals';

// const elem = <h2>Hello World!</h2>;
// const elem = React.createElement('h2', {className: 'greetings'},
//     'Hello World!')

// const text = 'Hello World!'
// const elem = (
//     <div>
//         <h2 className="text">Текст: {text}</h2>
//         <h2>{2 + 2}</h2>
//         <h2>{['222', 'dsdf']}</h2>
//         <label htmlFor=""></label>
//         <input type="text" />
//         <button tabIndex="0">Click</button>
//         <button/>
//     </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     elem
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
