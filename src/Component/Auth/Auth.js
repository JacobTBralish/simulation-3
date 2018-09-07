import React, { Component } from 'react';
import axios from 'axios';


class Auth extends Component {
    constructor(){
        super();
        this.state ={
            user:'',
            username:'',
            password:''
            
        }
    
    }
    // changeHandler = () => {

    // }
    
    handleRegister = () => {

        // const username = this.refs.username.value;
        // const password = this.refs.password.value;
        axios.post('/api/auth/register', {
          username: this.state.username,
          password: this.state.password
        }).then(response => {console.log(response.data)
          this.setState({ user: response.data });
        }).catch(error => {
          this.setState({ message: 'Something went wrong registering you.', error});
        });
      };

      handleLogin = () => {
        // const username = this.refs.username.value;
        // const password = this.refs.password.value;
        axios.post('/api/auth/login', {
          username:this.state.username,
          password:this.state.password
        }).then(response => {
          this.setState({ user: response.data });
        }).catch(error => {
          this.setState({ message: 'Could not login, something went wrong.', error});
        });
      };

      handleChange = (key,value) => {
          this.setState({
              [key]:value
          })
      }


      

    render() { 
        let { username, password} = this.state;
        return (
            <div>
                <div className='authboxinputs'>
                    <div >Auth</div>
                    <label type='text'>Username:</label>
                    <input name='username' onChange={(e) => this.handleChange(e.target.name, e.target.value)} value={username}></input>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={(e) => this.handleChange(e.target.name, e.target.value)} value={password}></input>

                    <div>
                </div>
                    <button onClick={this.handleLogin}>Login</button>   
                    <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        );
    }
}



export default Auth;