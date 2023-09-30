import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import getAuthUserData from "../../../redux/auth-reducer"
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getStatus } from "../../../redux/my-profile-reducer";
import { updateStatus } from "../../../redux/my-profile-reducer";

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
    const myId = 29928;
    this.props.getStatus(myId);
  }

  render(){
    return (
      <MyProfile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  }
};

let mapStateToProps = (state) => ({
  login: state.auth.login,
  status: state.myProfilePage.status
})

export default compose(
  connect(mapStateToProps, {getAuthUserData, updateStatus, getStatus}),
  withRouter,
  withAuthRedirect
)(MyProfileContainer);