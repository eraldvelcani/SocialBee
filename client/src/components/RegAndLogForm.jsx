import React from 'react'

const RegAndLogForm = ({ type, name, label }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input
        type={type}
        className="form-input"
        name={name}
        id={name}
        required
      />
    </div>
  );
}

export default RegAndLogForm;