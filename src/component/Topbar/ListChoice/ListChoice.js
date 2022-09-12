import React from 'react';
import {Container, NavLink} from "./Styled";

const ListChoice = () => {
    return (
        <Container>
            <NavLink>MP3</NavLink>
            <NavLink>NEWS</NavLink>
            <NavLink>TV</NavLink>
            <NavLink>ZALO PC</NavLink>
        </Container>
    );
};

export default ListChoice;