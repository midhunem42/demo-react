import React, { Component } from "react";
import Header from "../../components/Header";
import User from "../../components/User";
import Input from "../../components/Input";

import { filterUser, setFilteredUserList } from "./actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: undefined
    };
  }

  /**
   * sets latest userList when mounting
   */
  componentDidMount() {
    const { homeReducer, setFilteredList } = this.props;
    const { userList } = homeReducer;
    setFilteredList(userList);
  }

  /**
   * filter the user list
   */
  _handleChange = (value, name, isValid) => {
    const { search } = this.props;
    this.setState({ [name]: value });
    search(value);
  };
  render() {
    const { filteredList } = this.props.homeReducer;
    return (
      <>
        <Header brandName="Machine Test" />
        <div style={{ margin: 15 }}>
          <div
            style={{ width: "100%" }}
            className="d-flex justify-content-between"
          >
            <Input
              placeholder="Search user"
              type="text"
              id="search"
              name="search"
              onChange={this._handleChange}
            />
          </div>
          <Link
            className="btn btn-primary"
            style={{ position: "absolute", top: 15, right: 15, height: 40 }}
            to="/add-user"
          >
            Add New
          </Link>
        </div>
        <div className="user-list">
          <div className="row">
            {filteredList.map(user => {
              return <User key={user.user.email} details={user.user} />;
            })}
            {filteredList.length === 0 && <div>No user found</div>}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeReducer: state.homeReducer.toJS()
  };
};
const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(filterUser(query)),
    setFilteredList: users => dispatch(setFilteredUserList(users))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
