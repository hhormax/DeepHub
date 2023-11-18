import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { getStatus } from "../../redux/profile-reducer";
import { updateStatus } from "../../redux/profile-reducer";
import withRouter from "../../HOC/withRouter";

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.router.params.userID;
    if(!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render(){
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} />
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
withRouter)
(ProfileContainer);