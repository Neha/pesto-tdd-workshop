import React from 'react';
import { BUTTON } from '../../Constants/Constants';
interface props{
    click() : void
}

const Button: React.FC<props> = ({click}) => {
    return(
        <button 
            type="submit" 
            className="notActive" 
            onClick={() => click()}>{BUTTON.REFRESH}</button>
    )
}

export default Button;
