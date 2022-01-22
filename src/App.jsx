import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "25px"
  //   // 本来のCSSの書き方ではダメ。キャメルケースで書く。
  //   // font-size: "25px"
  // };
  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "25px"
  // };

  return (
    // <React.Fragment>
    //   <h1>こんにちは！</h1>
    //   <p>お元気ですか？</p>
    // </React.Fragment>
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <p style={contentStyle}>お元気ですか？</p> */}

      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      {/* <p style={contentLedyStyle}>元気です!</p> */}
      <ColorfulMessage color="pink" message="元気です" />
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
