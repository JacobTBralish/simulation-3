import React, { Component } from 'react';
import './App.css';
// import routes from './routes'
import Dashboard from './Component/Dashboard/Dashboard';
import Auth from './Component/Auth/Auth';
import Form from './Component/Form/Form';
import Post from './Component/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            {/* {routes} */}
            <Dashboard></Dashboard>
            <Auth></Auth>
            <Form></Form>
            <Post></Post>
        </div>
      </div>
    );
  }
}

export default App;
