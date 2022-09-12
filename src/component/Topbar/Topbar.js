import React from 'react';
import {Container, Input, LeftBar, NavigationButton, RightBar, Space} from "./Styled";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';


function Topbar() {
    return (
        <Container>
            <LeftBar>
                <KeyboardBackspaceIcon
                    sx={{flex: 1, color: 'gray', width: "20%", height: "50%"}}/>
                <EastIcon
                    sx={{flex: 1, color: 'gray',  width: "20%", height: "50%"}}/>
                <Input placeholder={'Tìm kiếm bài hát, nghệ sĩ, tên bài hát'}/>
            </LeftBar>
            <RightBar>

            </RightBar>
        </Container>
    );
}

export default Topbar;