import css, { globalCss, resolveCss } from '../Styles/StyledCss.css';

export default function StyledCss() {
  return(
    <>
      <style jsx>{css}</style>
      <style jsx>{globalCss}</style>
      {resolveCss.styles}
      <h3 className='tmp'>StyleBasicの基本</h3>
      <div className={`panel ${resolveCss.className}`}><b>Styled JSX</b>は、JSX式にスタイル定義を。。。
      </div>
    </>
  );
}