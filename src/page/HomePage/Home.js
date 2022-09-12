import React from 'react';
import {Container, LeftBar, RightBar} from "./Styled";
import Topbar from "../../component/Topbar/Topbar";

const Home = () => {
    return (
        <Container>
            <LeftBar></LeftBar>
            <RightBar>
                <Topbar/>
            </RightBar>
        </Container>
    );
};

export default Home;