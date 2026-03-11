import { useEffect, useState } from "react";

function Add() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log("Addition Component Loaded");

   
  }, []);

  function handleAddition() {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  }

  return (
    <div>
      <h1>Addition Function</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAddition}>Add</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default Add;