import React from 'react';

const User = props => {
    return (

            <div className='ui cards'>
                <h2>{props.user.username}</h2>
            </div>


    )
}

export default User;