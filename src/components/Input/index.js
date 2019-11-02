import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null
    };
  }
  handleValidate = e => {
    const { onChange, name, rules } = this.props;
    const value = e.target.value;
    rules.forEach(rule => {
      const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (rule.condition === "required" && value === "") {
        this.setState({ errorMessage: rule.message });
      } else if (rule.condition === "email" && !EMAIL_REGEXP.test(value)) {
        this.setState({ errorMessage: rule.message });
      } else {
        this.setState({ errorMessage: null });
      }
    });
    onChange(value, name);
  };
  render() {
    const { type, placeholder, id } = this.props;
    const { errorMessage } = this.state;
    return (
      <div className="form-group">
        <label htmlFor={id}>{placeholder}</label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          autoComplete="off"
          onChange={this.handleValidate}
          className="form-control"
        ></input>
        <span className="error">{errorMessage}</span>
      </div>
    );
  }
}

Input.defaultProps = {
  onChange: (value, name) => {
    console.log(value, name);
  },
  name: "input",
  rules: []
};
export default Input;
