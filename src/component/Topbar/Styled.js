import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  background-color: #170f23;
  position: fixed;
`;

export const Img = styled.img`
  flex: 1;
  width: 100%;
  height: 60%;
  margin: 10px;
`;
export const LeftBar = styled.div`
  display: flex;
  flex-direction: row;
  flex: 7;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input.attrs(props => ({
    placeholder: props.placeholder
}))`
  flex: 10;
  height: 60%;
  border-radius: 15px;
  background-color: #2f2739;
  border: none !important;
  color: white !important;
  ::placeholder{
    color: white !important;
  }
`
export const Space = styled.div`
  flex: 1
`
export const NavigationButton = styled.div`
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
export const RightBar = styled.div`
  flex: 5;
`;