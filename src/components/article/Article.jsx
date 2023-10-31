import React from 'react';
import styled from 'styled-components';
function Article(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.body}
        </div>
    );
}

export default Article;
