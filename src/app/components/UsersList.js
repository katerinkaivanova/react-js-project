import React, {Component} from 'react';
import axios from "axios";

import UserProfile from "./UserProfile";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    render() {
        if (!this.state.users) {
            return null;
        }

        const users = this.state.users.map(user => {
            return <UserProfile key={user.id} {...user}/>
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
            this.setState({users: response.data});
        });
    }
}

export default UsersList;