import React, { Component } from "react";
import TelegramEmbed from "react-telegram-embed";
export default class telegram extends Component {
  render() {
    var listLinks = [];
    for (let i = 1; i <= 20; i++) {
      var src = "https://t.me/ArianaBraving/" + i.toString();
      listLinks.push({ [i]: src });
    }
    var removeValFromIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18];
    var newList = removeValFromIndex.map(a => a - 1);
    for (var i = newList.length - 1; i >= 0; i--) {
      listLinks.splice(newList[i], 1);
    }

    return (
      <div>
        <h2>Here is all my telegram posts </h2>
        {/* <TelegramEmbed src="https://t.me/ArianaBraving/278" /> */}
        {listLinks.map((item, index) => {
          const linkNo = Object.keys(item);
          const telegramSrc = Object.values(item);
          // item.values = Object.values(listLinks)
          return (
            <div key={index}>
              <h3 style={{ textAlign: "center" }}>Post No: {linkNo}</h3>
              <TelegramEmbed src={telegramSrc} />
              <br />
              <br />
            </div>
          );
        })}
        {/* {listLinks} */}
      </div>
    );
  }
}
