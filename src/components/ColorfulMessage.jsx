import React from "react";

const ColorfulMessage = (props) => {
  // console.log(props);
  // const contentStyle = {
  //   color: props.color,
  //   fontSize: "25px"
  //   // 本来のCSSの書き方ではダメ。キャメルケースで書く。
  //   // font-size: "25px"
  // };

  // 分割代入を使用した書き方
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "25px"
    // 本来のCSSの書き方ではダメ。キャメルケースで書く。
    // font-size: "25px"
  };

  // return <p style={contentStyle}>お元気ですか？</p>;
  // return <p style={contentStyle}>{props.message}</p>;
  // return <p style={contentStyle}>{props.children}</p>;
  // b分割代入を使用した書き方
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
