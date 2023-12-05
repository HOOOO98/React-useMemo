import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("rgb(0,0,0)");
  const [onOff, setOnOff] = useState(false);

  const isOnOff = {
    text: onOff ? "켜짐" : "꺼짐",
  };

  return (
    <div className="App">
      <section>
        <input
          id="color-picker"
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button style={{ color: color }} onClick={() => setColor("rgb(0,0,0)")}>
          초기화
        </button>
      </section>
      <section>
        <p>{isOnOff.text}</p>
        <button onClick={(e) => setOnOff(!onOff)}>on/off</button>
      </section>
    </div>
  );
}

export default App;
