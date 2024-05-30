import css from 'styled-jsx/css'

/*
export default css`
  .panel{
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
  }
  .tmp {
    color: blue
  }
  `;
*/

export default css `...`;
export const globalCss = css.global`
h3{
  background-color: yellow;
}
`;

export const resolveCss = css.resolve`
.pnael{
  margin: 50px;
}`;