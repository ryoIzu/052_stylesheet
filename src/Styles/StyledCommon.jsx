import styled from "styled-components";
import PanelBase from './StyledCommon.css';

const MyPanel = styled.div `
  width:300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: royalblue;
  color: red;
`;

export default function StyledCommon() {
  return(
    <MyPanel><b>STYLED JSX</b>はJSX形式にスタイル定義を。。。。</MyPanel>
  );
}