import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("rgb(0,0,0)");

  return (
    <div className="App">
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />

      <div
        style={{ width: "100px", height: "100px", backgroundColor: color }}
      />
    </div>
  );
}

export default App;
