import React from 'react';
import { Card } from 'semantic-ui-react'

const User = props => {
    return (
        <Card>

            <div className='ui cards'>
                <div class="card">
                    <div class="content">
                        <div class="header">
                            <h2>{props.user.username}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </Card>


    )
}

export default User;