import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Input } from '../../components/Inputs';

import './Login.scss';

export function Login() {

    return(
        
        <div className='container-principal-login'>

            

                <div className='area-logo-login'>
                    <img src='/assets/logo_lobo.svg'/>
                </div>



                <div className='container-conteudo-login'>

                    <div>
                        <img src='/assets/logo_name.svg'/>
                    </div>

                    <h1>Bem Vindo(a)</h1>
                    <form>
                        
                        <Input type={'email'} title={'Digite seu email'}/>
                        <Input type={'password'} title={'Digite sua teste'}/>

                        <br/>

                        <button>Entrar</button>

                        <br/>

                        <Link to='forgot_password' className='forgot_password'>Esqueceu sua senha?</Link>

                        <p>
                            Ainda não possui conta?{" "}
                            <Link to="/cadastro">Cadastre-se</Link>
                        </p>  

                    </form>

                </div>

            </div>




        // <img src='/assets/Logo.svg'/>

    );
}