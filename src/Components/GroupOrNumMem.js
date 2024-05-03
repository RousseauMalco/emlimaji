import React, { useState } from 'react';

export function MultipleChoice({ question, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState("Group Size");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  return (
    <div class='container mx-auto'>
      <h2>{question}</h2>
      <div class="text-md rounded-xl shadow-md font-semibold text-black bg-white py-1 px-20">
          {options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            </div>
          ))}
      </div>  
    </div>
  );
}

