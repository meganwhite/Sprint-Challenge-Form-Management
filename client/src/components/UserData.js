import React from 'react';
import User from './User';

const UserData = props => {

    return (
        <div className = "user-data">
            {props.users.map(user => (
                <User 
                    key = {user.id}
                    user = {user}
                    username = {user.username} 
                />
            ))}
        </div>
    )
}

export default UserData