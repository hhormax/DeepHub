import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import getAuthUserData from "../../../redux/auth-reducer"

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
    if(!this.props.isAuth) return <Navigate to={"/login"} />
    return (
      <MyProfile {...this.props} />
    );
  }
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(withRouter(MyProfileContainer));