import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import getAuthUserData from "../../../redux/auth-reducer"
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getStatus } from "../../../redux/my-profile-reducer";
import { updateStatus } from "../../../redux/my-profile-reducer";
import { savePhoto } from "../../../redux/my-profile-reducer";
import { getMyProfile } from "../../../redux/my-profile-reducer";


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component {...props} router={{ location, navigate, params }}/>
      );
  }
  return ComponentWithRouterProp;
}

class MyProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.myId;
    this.props.getMyProfile(userId);
    this.props.getStatus(userId);
  }

  render(){
    return (
      <MyProfile {...this.props} 
      photo={this.props.photo}
      status={this.props.status} 
      updateStatus={this.props.updateStatus} 
      isOwner={!!this.props.getStatus(this.props.myId)}
      savePhoto={this.props.savePhoto}
      //profile={this.props.profile}
      />
    );
  }
};


let mapStateToProps = (state) => ({
  myId: state.auth.userId,
  login: state.auth.login,
  status: state.myProfilePage.status,
  photo: state.myProfilePage.photo,
  profile: state.myProfilePage.myProfileInfo
})

export default compose(connect(mapStateToProps, {getAuthUserData, getMyProfile, updateStatus, getStatus, savePhoto}), withRouter, withAuthRedirect)(MyProfileContainer);