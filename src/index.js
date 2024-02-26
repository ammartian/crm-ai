import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//TODO
//2. Update the code to handle data dynamically using props, hooks and states (defactoring, multiple state in one function, etc)
//3. Handle add
//4. Handle delete
//5. Hanlde edit
//6. Implement material UI
//7. Create server for BE
//8. Create API for CRUD
//9. Integrate OpenAI API
