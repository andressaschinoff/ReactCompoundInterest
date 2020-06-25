import React from 'react';

export default function InputNumber({
  id,
  title,
  value,
  onChangeInput,
  step,
  min,
  max,
}) {
  const handleInputNumber = (event) => {
    const newValue = event.target.value;
    onChangeInput(newValue);
  };

  return (
    <div>
      <div className="input-field col s6 m4">
        <input
          id={id}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          autoFocus
          onChange={handleInputNumber}
        />
        <label className="active" htmlFor={id}>
          {title}
        </label>
      </div>
    </div>
  );
}
