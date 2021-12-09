import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext } from '../context/auth'

export default function Navbar() {

const {isLoggedIn, user, logoutUser} = useContext(AuthContext)

    console.log(user)
    return (
        <nav className='navbar'>
            <Link to='/'>
            <button className='navbarItem'>Home</button>
            </Link>
            {isLoggedIn ? (
                <>
                <Link to='/myLibrary'>
                  <button className='navbarItem'>My Library</button>
                </Link>
                <button className='navbarItem' onClick={logoutUser}>Logout</button>
                </>
            ) : (
                <>
                <Link to='/signup'>
                    <button className='navbarItem'>Signup</button>
                </Link>
                <Link to='/login'><button className='navbarItem'>Login</button></Link>
                </>
            )}
        </nav>
    )
}