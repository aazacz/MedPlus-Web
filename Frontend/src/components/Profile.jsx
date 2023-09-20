import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/login'
 
const Profile = () => {

const {count} = useContext(LoginContext)

    return (
        <>
            <h1> {count} </h1>
        </>
    )
}

export default Profile