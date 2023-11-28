function PrivateRoute(props) {
    let { component: Component, children, render, ...rest } = props
    let auth = true
    return (
      <Route
        {...rest}
        render={() => auth
          ? <Component />
          : <Redirect to="/login" />
        }
      />
    );
  }


  export default PrivateRoute