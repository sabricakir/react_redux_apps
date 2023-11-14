import React from 'react';

const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = 'form-group my-3';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}
        {error && <span className="text text-danger ms-2">*{error}</span>}
      </label>
      <div className='field'>
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TextInput;