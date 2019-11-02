import React, { Component } from "react";
import Input from "../../components/Input";
import { loginSubmit, setLoginError } from "../../store/global/actions";
import { connect } from "react-redux";
import Assets from "../../assets";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }
  _handleChange = (val, name) => {
    this.setState({ [name]: val });
    const { globalReducer, resetError } = this.props;
    if (globalReducer.loginError !== null) {
      resetError();
    }
  };
  _handleSubmit = () => {
    const { handleSubmit } = this.props;
    handleSubmit(this.state);
  };
  render() {
    const { loginError } = this.props.globalReducer;
    return (
      <div className="login-page  d-flex flex-wrap">
        <div className="col-xl-4 col-12 left">
          <div className="login-box">
            <img className="logo" src={Assets.ic_logo} alt="ic_login_bg" />
            <div className="form">
              <span className="error">{loginError}</span>
              <Input
                placeholder="Username"
                type="text"
                id="username"
                name="username"
                onChange={this._handleChange}
              />
              <Input
                placeholder="Password"
                type="password"
                id="Password"
                name="password"
                onChange={this._handleChange}
              />
              <div>
                <button
                  className="btn btn-outline-primary login-btn"
                  onClick={this._handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-12 right">
          <img
            className="img-fluid"
            src={Assets.ic_login_bg}
            alt="ic_login_bg"
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    globalReducer: state.globalReducer.toJS()
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: data => dispatch(loginSubmit(data)),
    resetError: () => dispatch(setLoginError(null))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
