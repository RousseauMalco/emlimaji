import "../App.css";

import React from "react";

import { useState } from 'react';

export function GroupCustomizeTextField({title,content}) {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  const [isActive, setIsActive] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  function Input({title,value,onChange}) {
  return (
    <>
      <h2> {title} </h2>
      <form  onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button class="sm:rounded-lg"
        disabled={
          answer.length === 0 ||
        //   isNaN(answer) ||
          answer == 0 ||
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
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(answer)) {
          reject(new Error("Number of groups needs to be a number"));
        } else {
          resolve("Form submitted successfully!");
        }
      }, 150);
    });

}

}
