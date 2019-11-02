import React from "react";

const Select = props => {
  const { type, placeholder, id, onChange, name, options, value } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{placeholder}</label>
      <select
        type={type}
        placeholder={placeholder}
        id={id}
        autoComplete="off"
        onChange={e => {
          onChange(e.target.value, name);
        }}
        className="form-control"
        value={value}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
Select.defaultProps = {
  onChange: (e, name) => {
    console.log(e.target.value, name);
  },
  name: "Select",
  options: []
};
export default Select;
