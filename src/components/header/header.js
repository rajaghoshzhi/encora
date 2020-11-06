import React from 'react';
import './header.css';

const Header =(props) =>{

    return (
    <div className='page-header'>{props.headerName}</div>
    )
}


export default Header;