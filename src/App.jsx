import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "25px"
    // 本来のCSSの書き方ではダメ。キャメルケースで書く。
    // font-size: "25px"
  };

  return (
    // <React.Fragment>
    //   <h1>こんにちは！</h1>
    //   <p>お元気ですか？</p>
    // </React.Fragment>
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentStyle}>元気です</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
