import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootReducer from './Service/Reducers/Index'
// const store = createStore(rootReducer)
// console.log(store)
ReactDOM.render(
    <>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  {/* <h1 contentEditable="true">{`my name is ${fname} ${middelname} ${lname}`}</h1>
  <h1>hello {fname} {1+1} {2*2} {5-1} {10/2} {Math.random()}</h1>
  <h1>{`today dateis ${date}`}</h1>
  <h1>{`current time is ${currenttime}`}</h1> */}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
