import React from 'react';
import './Input.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
