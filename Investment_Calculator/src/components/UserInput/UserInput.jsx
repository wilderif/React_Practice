import React, { useState } from "react";
import "./UserInput.css";

export default function UserInput(props) {
  return (
    <section className="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={props.userInput.initialInvestment}
            onChange={(event) => {
              props.onChange("initialInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={props.userInput.annualInvestment}
            onChange={(event) => {
              props.onChange("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={props.userInput.expectedReturn}
            onChange={(event) => {
              props.onChange("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={props.userInput.duration}
            onChange={(event) => {
              props.onChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
