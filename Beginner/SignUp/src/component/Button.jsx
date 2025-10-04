import React from 'react'
import { NavLink } from 'react-router-dom'

function Button() {
  return (
    <div className="flex justify-center mt-10">
      <div className='flex gap-4.5'>
      <NavLink
        to="/SignUp"
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600"
      >
        Sign Up
      </NavLink>

      <NavLink
        to="/SignIn"
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-green-600"
      >
        Sign In
      </NavLink>

      </div>
    </div>
  )
}

export default Button