import React, { useState } from 'react';

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";

import './Login.css';

export function Login() {

    const Home = () => <h2>Home</h2>
    const Sobre = () => <h2>Sobre</h2>

    const [isActive, setIsActive] = useState(false); 
    const [value, setValue] = useState('');

    const [isActive2, setIsActive2] = useState(false); 
    const [value2, setValue2] = useState('');

    function handleTextChange(text) {
        setValue(text);

        if (text !== '') {
        setIsActive(true);
        } else {
        setIsActive(false);
        }
    }

    function handlePasswordChange(text) {
        setValue2(text);

        if (text !=='') {
        setIsActive2(true);
        } else {
        setIsActive2(false);
        }
    }


    return(

            <div className='container-principal'>

            
                <div className='area-logo'>
                    <img src='/assets/logo-transparent.svg'/>
                </div>



                <div className='container-conteudo'>

                    <h1>Bem Vindo(a)</h1>
                    <form>
                        <div id='float-label'>
                            <input 
                                type='email'
                                value={value}
                                onChange={(e) => handleTextChange(e.target.value)}
                            />

                            <label 
                                className={ isActive ? "Active" : "" } 
                                htmlFor="email">
                                    Email
                            </label>
                        </div>

                        <div id='float-label'>
                            <input 
                                type='password'
                                value={value2}
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />

                            <label 
                                className={ isActive2 ? "Active" : "" } 
                                htmlFor="password">
                                    Senha
                            </label>
                        </div>

                        <br/>

                        <div className='checkbox'>
                            <input type='checkbox' />
                            <label for='senha'>Lembrar senha</label>
                        </div>

                        <br/>

                        <button>Entrar</button>

                        <br/>

                        <a href="https://www.google.com/">Esqueceu sua senha?</a>

                        <p>
                            Ainda não possui conta?{" "}
                            <Link to="/cadastro">Cadastre-se</Link>
                        </p>  


                        {/* <Router>

                            <Link to='/home'>
                                Home
                            </Link>
                            <Link to='/sobre'>
                                Sobre
                            </Link>

                            
                            <Route path='/home'>
                                <Home />
                            </Route>
                            <Route path='/sobre'>
                                <Sobre />
                            </Route>
                            
                        </Router> */}


                    </form>

                </div>

            </div>




        // <img src='/assets/Logo.svg'/>

    );
}