import { Link } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Notfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="border border-black text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white "
        >
          Go to Home
        </NavLink>

      </div>
    </div>
  )
}

export default Notfound


