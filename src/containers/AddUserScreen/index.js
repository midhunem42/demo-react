import React, { Component } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { connect } from "react-redux";
import { addUser } from "../HomeScreen/actions";
import { Link } from "react-router-dom";

class AddUserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "mr",
      first: {
        value: null,
        isValid: false
      },
      last: {
        value: null,
        isValid: false
      },
      gender: "male",
      email: {
        value: null,
        isValid: false
      },
      username: {
        value: null,
        isValid: false
      },
      password: {
        value: null,
        isValid: false
      },
      phone: {
        value: null,
        isValid: false
      },
      dob: {
        value: null,
        isValid: false
      },
      error: false
    };
  }

  isEmpty = val => {
    return val === undefined || val == null || val.length <= 0 ? true : false;
  };

  /**
   * Submitting the values
   */
  handleSubmit = () => {
    const {
      first,
      last,
      email,
      password,
      phone,
      dob,
      title,
      gender,
      username
    } = this.state;
    if (
      this.isEmpty(first.value) ||
      this.isEmpty(last.value) ||
      this.isEmpty(email.value) ||
      this.isEmpty(password.value) ||
      this.isEmpty(phone.value) ||
      this.isEmpty(dob.value) ||
      this.isEmpty(username.value) ||
      !email.isValid
    ) {
      this.setState({ error: true });
    } else {
      const request = {
        first: first.value,
        last: last.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        dob: phone.value,
        title,
        gender,
        username: username.value
      };
      this.props.addUser(request);
    }
  };
  /**
   * input value is stored
   */
  _handleChange = (value, name, isValid) => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    const data = { value, isValid };
    this.setState({ [name]: data });
  };
  render() {
    const { gender } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <div className="card add-user">
            {this.state.error && (
              <span className="error" style={{ padding: 15 }}>
                Please fill all the fields
              </span>
            )}
            <div className="row card-add-user">
              <div className="col-lg-6">
                <Select
                  placeholder="Title"
                  type="text"
                  id="title"
                  name="title"
                  options={["mr", "mrs", "miss"]}
                  value={gender}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="first"
                  rules={[
                    { condition: "required", message: "First name required" }
                  ]}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  name="last"
                  rules={[
                    { condition: "required", message: "First name required" }
                  ]}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Select
                  placeholder="Gender"
                  type="text"
                  id="gender"
                  name="gender"
                  options={["male", "female", "others"]}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  rules={[
                    { condition: "required", message: "Email required" },
                    { condition: "email", message: "Invalid Email" }
                  ]}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  placeholder="Username"
                  type="text"
                  id="username"
                  name="username"
                  rules={[
                    { condition: "required", message: "Username required" }
                  ]}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  rules={[
                    { condition: "required", message: "Password required" }
                  ]}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  placeholder="Phone"
                  type="number"
                  id="Phone"
                  name="phone"
                  rules={[{ condition: "required", message: "Phone required" }]}
                  onChange={this._handleChange}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  placeholder="Dob"
                  type="text"
                  id="dob"
                  name="dob"
                  rules={[{ condition: "required", message: "Dob required" }]}
                  onChange={this._handleChange}
                />
              </div>
            </div>
            <div className="card-add-user d-flex justify-content-end">
              <button
                className="btn btn-outline-primary button-add-user"
                onClick={this.handleSubmit}
              >
                Add User
              </button>
              <Link className="btn btn-outline-secondary" to="/home">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddUserScreen);
