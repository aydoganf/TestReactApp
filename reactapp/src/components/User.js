import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    state = {
        isVisible: false
    }

    onClickEvent = (e) => {
        
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (e) => {
        const {id, deleteUser} = this.props;

        deleteUser(id);
    }

    render() {

        const {name, department, salary} = this.props;
        const {isVisible} = this.state;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                        <i onClick={this.onDeleteUser} className="fa fa-trash" style={{cursor:"pointer"}}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                        <p className="card-text">Maaş: {salary}</p>
                        <p className="card-text">Department: {department}</p>
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired
}

User.defaultProps = {
    name: "Name Surname",
    salary: 0,
    department: "lorem ipsum"
}

export default User;