import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>React Counter App</h1>
      <h2>Counter: {count}</h2>

      <div>
        <button onClick={increase} style={styles.button}>
          Increase
        </button>
        <button onClick={decrease} style={styles.button}>
          Decrease
        </button>
        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>

      {count >= 5 && (
        <h3 style={{ color: "green" }}>Goal Reached!</h3>
      )}

      <hr />

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={styles.input}
      />

      <h3>Your Message:</h3>
      <p>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },

  input: {
    padding: "10px",
    width: "250px",
    marginTop: "20px",
    fontSize: "16px",
  },
};

export default App;