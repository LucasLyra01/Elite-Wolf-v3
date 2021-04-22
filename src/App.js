import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import TelaCadastro from './components/Cadastro/Cadastro';

import './styles/global.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={TelaCadastro} />
      </BrowserRouter>
    </>

  );
}

export default App;
