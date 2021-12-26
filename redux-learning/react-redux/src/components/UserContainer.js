import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';
const UserContainer = ({userData,fetchUsers}) => {
    useEffect(() => {
        fetchUsers()
    },[fetchUsers])
    return  userData.loading ? (<h1>Loading...</h1>) :userData.error ? (<p>{userData.error}</p>) : (
        <div>
            <h1>User List</h1>
            <div>{
                userData.users.map((user => <p key={user.id}>{user.name}</p>))
                }
                </div>
        </div>

    )
};

const mapStoreToProps = state => {
    return {
        userData:state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect (mapStoreToProps,mapDispatchToProps)(UserContainer);