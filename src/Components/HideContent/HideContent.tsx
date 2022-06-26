import React from 'react';
import {useState} from 'react';


const HideContent: React.FC = () : JSX.Element => {
    const hide = {
        'display' : 'none'
    }
    const [isVisible, setVisibility ] = useState(true);

    const clickhandler = () => {
        setVisibility(!isVisible)
    }   
    return(
        <>
            <div data-testid="container" style={isVisible ? hide : {}}>Hey</div>
            <button onClick={clickhandler}>Click</button>
        </>
    )
}

export default HideContent;