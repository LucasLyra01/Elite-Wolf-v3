import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import styles from './Cadastro.scss';

export default function TelaCadastro(){

    const [isActiveName, setIsActiveName] = useState(false); 
    const [valueName, setValueName] = useState('');
    
    const [isActiveEmail, setIsActiveEmail] = useState(false); 
    const [valueEmail, setValueEmail] = useState('');
    
    const [isActivePassword, setIsActivePassword] = useState(false); 
    const [valuePassword, setValuePassword] = useState('');

    function handleTextChangeName(text) {
        setValueName(text);

        if (text !== '') {
        setIsActiveName(true);
        } else {
        setIsActiveName(false);
        }
    }
    function handleTextChangeEmail(text) {
        setValueEmail(text);

        if (text !== '') {
        setIsActiveEmail(true);
        } else {
        setIsActiveEmail(false);
        }
    }
    function handleTextChangePassword(text) {
        setValuePassword(text);

        if (text !== '') {
        setIsActivePassword(true);
        } else {
        setIsActivePassword(false);
        }
    }

    const ArrayData = {
        ArrayMeses: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ]
    
    }

    function funcDias() {
        const dias = [];

        for (let index = 1; index <= 31; index++) {
            
            dias.push(index);
        }
        
        return dias;
    }

    function funcAnos() {
        const anos = [];

        for (let index = 1921; index <= 2021; index++) {
            
            anos.push(index);
        }

        anos.reverse();
        
        return anos;
    }
    
    return (
        
        <div className='container-principal-cadastro'>

            <div className='area-logo-cadastro'>
                <img src='/assets/logo_lobo.svg'/>
            </div>
            
            <div className='container-conteudo-cadastro'>

                <div>
                    <img src='/assets/logo_name.svg'/>
                </div>

                <h1>Cadastre-se</h1>

                {/* <button>
                    <img src='/assets/icone_google.svg'/>
                    <span>Cadastre-se com sua conta do Google</span>
                </button> */}

                <form>
                    <div id='float-label'>
                        <input 
                            type='text'
                            value={valueName}
                            onChange={(e) => handleTextChangeName(e.target.value)}
                        />

                        <label 
                            className={ isActiveName ? "Active" : "" } 
                            htmlFor="user">
                                Digite seu nome
                        </label>
                    </div>
                    <br/>

                    <div className='data-nascimento'>
                        <label>Data de nascimento</label>
                    </div>

                    <div className='dropdown'>

                        <div>
                            <select className='button-select'>
                                <option disabled hidden selected>Dia</option>
                                {funcDias().map(data => (
                                    <option>{data}</option>
                                    ))}
                            </select>
                        </div>

                        <div>
                            <select className='button-select'>
                                <option disabled hidden selected>Mês</option>
                                {ArrayData.ArrayMeses.map(data => (
                                    <option>{data}</option>
                                    ))}
                            </select>
                        </div>

                        <div>
                            <select className='button-select'>
                                <option disabled hidden selected>Ano</option>
                                {funcAnos().map(data => (
                                    <option>{data}</option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div id='float-label'>
                        <input 
                            type='email'
                            value={valueEmail}
                            onChange={(e) => handleTextChangeEmail(e.target.value)}
                        />

                        <label 
                            className={ isActiveEmail ? "Active" : "" } 
                            htmlFor="email">
                                Digite seu email
                        </label>
                    </div>

                    <div id='float-label'>
                        <input 
                            type='password'
                            value={valuePassword}
                            onChange={(e) => handleTextChangePassword(e.target.value)}
                        />

                        <label 
                            className={ isActivePassword ? "Active" : "" } 
                            htmlFor="password">
                                Digite sua senha
                        </label>

                        <span class="lnr lnr-eye"></span>
                    </div>

                    <br/>

                    <button>Entrar</button>
                </form>

                </div>
        </div>

    )

}