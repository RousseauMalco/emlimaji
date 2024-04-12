import React, { useState } from 'react';

export function MultipleChoice({ question, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState("Group Size");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  return (
    <div className='container'>
      <h2>{question}</h2>
      <div class="text-lg rounded-xl font-semibold text-black bg-white py-1 px-20">
          {options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            </li>
          ))}
      </div>  
    </div>
  );
}

