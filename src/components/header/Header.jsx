import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

function Header(props) {
    console.log(props);
    const StyleHeader = {
        display: 'flex',
        border: '1px solid black',
    };

    return (
        <header style={StyleHeader}>
            <h1>{props.title}</h1>
            <Nav />
        </header>
    );
}

export default Header;
