import React, { useState } from "react";

//Interacting with states
//In this, I have created a state variable time which updates to current time, when updateTime() is called.
//I have added a button Get Time which when got clicked updates the current time and this is being rendered using h1 tag.
//I have also used setInterval() which is a asynchronous function, which calls updateTime() after every 1000 milliseconds, so that
//time is getting updated after every 1000 ms.

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString().slice(0,-3);
  

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString().slice(0,-3);
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
