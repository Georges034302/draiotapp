import React from "react";
import axios from 'axios';
import User from '../store/User'
import { NotificationManager } from "react-notifications";
interface LoginProps {
  setAuth: any;
}

const Login: React.FC<LoginProps> = props => {


    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    // setTimeout(() => {
    //   props.setAuth(true);
    // }, 4000);
  }, []);


  const login = e => {
      // e.preventDefault()
      // const loginData = {
      //   username,
      //   password
      // }
      // axios.post('/auth/login', {...loginData})
      // .then((res) => {
            //if(res.data.payload.token) {
              User.save("Success") //User.save(res.data.payload.token)
              props.setAuth(true)
           // }
      // })
      // .catch(err => {

      //   NotificationManager.error('Username or password is incorrect')
      //     console.log(err)
      // })
  }

  return (
    <div className="row mt-5">
      {/* <div className="col-md-6 offset-md-3 col-12 col-sm-12">
        <div className="card">
          <div className="card-body">
            <h4>Login to system</h4>
            <form
            onSubmit={login}
            >
              <label>Username</label>
              <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" />
              <label>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
              <input type="submit" value="Login" className="btn btn-primary mt-4"/>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
