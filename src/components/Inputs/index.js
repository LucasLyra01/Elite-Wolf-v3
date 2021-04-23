import { useState } from 'react';
import styles from './index.scss';

export function Input(props) {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');

    function handleTextChange(text){
        setValue(text);

        if (text !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }

    return(
        <div id='float-label'>
            <input 
                type={props.type}
                value={value}
                onChange={(e) => handleTextChange(e.target.value)}
            />

            <label className={ isActive ? "Active" : ''}>
                {props.title}
            </label>
        </div>
    )
}