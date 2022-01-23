import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入を使用した書き方
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "25px"
    // 本来のCSSの書き方ではダメ。キャメルケースで書く。
    // font-size: "25px"
  };

  // b分割代入を使用した書き方
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
