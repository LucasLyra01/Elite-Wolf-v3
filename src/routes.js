import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import TelaCadastro from './pages/Cadastro/Cadastro';
import { isAuthenticated } from './auth';
import Esqueceu_Senha from './pages/Esqueceu_Senha/Senha';

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route 
        { ...rest }
        render={props =>
        isAuthenticated()
        ? ( <Component { ...props }/>)
        : ( <Redirect to={{ pathname: '/', state: { from: props.location } }}/> )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/forgot_password" component={Esqueceu_Senha} />
        <PrivateRoute path="/cadastro" component={TelaCadastro} />
    </BrowserRouter>
);

export default Routes;