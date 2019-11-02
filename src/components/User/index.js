import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});
const User = props => {
  const classes = useStyles();
  const { details } = props;
  return (
    <div className="col-sm-12 col-lg-3 card">
      <div className="row">
        <Avatar
          alt= {details.name.first}
          src={
            details.picture === undefined
              ? "https://randomuser.me/api/portraits/thumb/men/78.jpg"
              : details.picture.large
          }
          className={classes.bigAvatar}
        />
        <div>
          <h5 className="user-details-text">
            <span className="name-title">{details.name.title}</span>{" "}
            {details.name.first} {details.name.last}
          </h5>
          <h6 className="user-details-text">{details.gender}</h6>
          <h6 className="user-details-text">{details.email}</h6>
          <h6 className="user-details-text">{details.phone}</h6>
          <h6 className="user-details-text">{details.dob}</h6>
        </div>
      </div>
    </div>
  );
};

export default User;
