import React from "react";

import "./index.css";
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Result from "./components/Result/Result.jsx";

function App() {
  const [userInput, setUserInput] = React.useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">
          Please enter a valid duration (1 or more years).
        </p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
