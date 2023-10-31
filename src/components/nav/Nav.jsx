import React from 'react';
import styled from 'styled-components';
function Nav(props) {
    const StyleNav = {
        display: 'flex',
    };
    const StyleNava = {
        margin: '30px 20px 0 50px',
    };
    return (
        <nav style={StyleNav}>
            <a href="#" style={StyleNava}>
                1
            </a>
            <a href="#" style={StyleNava}>
                2
            </a>
            <a href="#" style={StyleNava}>
                3
            </a>
        </nav>
    );
}

export default Nav;
