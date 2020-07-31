import React, { useEffect } from "react";
import axios from "axios";
import Login from "../pages/Login";
import { string } from "prop-types";
import User from "../store/User";
// this solution is based on Medium article but I can't find it
const Authentication = ChildComponent => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
    }

    state = {
      auth: false
    };

    componentWillMount() {

        let token = User.load()
        if(token) {
          if(token.length > 0) {
            this.setState({ auth: true })
          }
        }

    }


    setAuth = status => {
      this.setState({
        auth: status
      });
    };

    render() {
      return this.state.auth ? (
        <ChildComponent {...this.props} setAuth={this.setAuth}/>
      ) : (
        <Login {...this.props} setAuth={this.setAuth} />
      );
    }
  };
};

export default Authentication;
