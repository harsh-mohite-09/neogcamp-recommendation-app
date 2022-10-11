import React, { useState } from "react";
import "./styles.css";

const data = {
  Comedy: [
    ["F.R.I.E.N.D.S", "5/5"],
    ["Big Bang Theory", "5/5"]
  ],
  Scifi: [
    ["Stranger Things", "4/5"],
    ["Lost in Space", "3/5"]
  ],
  Fantasy: [
    ["Harry Potter", "4/5"],
    ["Beauty & The Beast", "4/5"]
  ]
};

const list = Object.keys(data);

export default function App() {
  const [meaning, setMeaning] = useState([
    ["F.R.I.E.N.D.S", "5/5"],
    ["Big Bang Theory", "5/5"]
  ]);

  function listItemClickHandler(item) {
    var meaning = data[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span>📺</span> Must Watch Web Series
      </h1>
      <p className="intro">
        Checkout my favourite Web Series. Select a genre to get started
      </p>
      {list.map((item) => {
        return (
          <span
            className="btn"
            key={item}
            onClick={() => listItemClickHandler(item)}
            style={{
              cursor: "pointer",
              border: "1px solid black"
            }}
          >
            {item}
          </span>
        );
      })}
      <hr className="break" />
      <div>
        {meaning.map((item) => {
          return (
            <div className="output">
              <div className="title">{item[0]}</div>
              <div className="rating">{item[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
