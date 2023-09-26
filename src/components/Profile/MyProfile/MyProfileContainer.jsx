import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import getAuthUserData from "../../../redux/auth-reducer"
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

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
  
  componentDidMount(){}

  render(){
    return (
      <MyProfile {...this.props} />
    );
  }
};

let mapStateToProps = (state) => ({
  login: state.auth.login
})

export default compose(
  connect(mapStateToProps, {getAuthUserData}),
  withRouter,
  withAuthRedirect
)(MyProfileContainer);