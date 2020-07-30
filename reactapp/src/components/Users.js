import React, { Component } from 'react'
import User from './User'
import PropTypes from 'prop-types'


class Users extends Component {
    render() {
        const { users, deleteUser} = this.props;

        return (
            <div>
                {
                    users.map(user => {
                         return (
                             <User 
                                 key = {user.id}
                                 id = {user.id}
                                 name = {user.name}
                                 salary = {user.salary}
                                 department = {user.department}
                                 deleteUser = {deleteUser}
                             />
                        )
                    })
                }
            </div>
        )
    }
}

User.propTypes = {
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default Users;