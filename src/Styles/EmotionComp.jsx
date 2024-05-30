/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  color: white;
  border-radius: 20px;
  background-color: royalblue;
`;

export default function EmotionComp() {
  return(
    <MyPanel><b>Styled JSX</b>はJSX形式にスタイル定義を。。。。</MyPanel>
  );
}