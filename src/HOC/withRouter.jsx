import { useLocation, useParams } from 'react-router-dom';
  
 export default function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }