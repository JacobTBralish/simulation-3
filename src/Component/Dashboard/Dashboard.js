import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';

class Dashboard extends Component {


    handleLogout = () => {
        axios.post('/api/auth/logout').then(response => {
            this.setState({ user: null});
        }).catch(error => {
            this.setState({message: 'Could not log out, something went wrong.', error})
        })
    }

    render() { 
        return ( 
            <div>
                <Nav>YO</Nav>
                <button onClick={(e) => this.handleLogout(e.target.value)}></button>

                <div>Dashboard</div>
            </div>
         );
    }
}
 
export default Dashboard;