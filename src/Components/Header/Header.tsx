import React from 'react';

interface props {
    title: string
}
const headingStyle = {
    'backgroundColor' : 'rgb(220, 220, 220)',
    'color': 'rgb(0,0,0)'
}
const Header : React.FC<props> = ({ title }) => {
    return(
        <header data-testid="heading" style={headingStyle}>
            <h1 className="m-18">{title}</h1>
        </header>
    )
}

export default Header;
