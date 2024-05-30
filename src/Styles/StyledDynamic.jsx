export default function StyledDynamic({theme}) {
  return(
    <>
    <style jsx>{`
    .panel {
      width: 400px;
      padding: 10px;
      border: 1px solid #000;
      color: white
    }
    `} 
    </style>
    <style jsx>{`
    .panel {
      border-radius: ${theme.radius ? '50px' : '0px'};
      background-color: ${theme.color};
    }
    `}
    </style>
    <div className="panel"><b>Styled JSX</b>はJSX形式にスタイル定義を。。。。</div>
    </>
  );
}