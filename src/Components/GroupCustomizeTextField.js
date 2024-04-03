import "../App.css";

import React from "react";

import { useState } from 'react';

export function GroupCustomizeTextField({inputSize,onSizeChange}) {
//   const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
//   const [isActive, setIsActive] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    try {
      await submitForm(inputSize);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

  return (
    <>
      <h2> How many teams do you want to create </h2>
      <form  onSubmit={handleSubmit}>
        <textarea
          value={inputSize}
          onChange={onSizeChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button class="sm:rounded-lg"
        disabled={
          inputSize.length === 0 ||
          inputSize == 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(inputSize)) {
          reject(new Error("Number of groups needs to be a number"));
        } else {
          resolve("Form submitted successfully!");
        }
      }, 150);
    });

}

