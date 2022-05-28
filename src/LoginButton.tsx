import firebase from 'firebaseui';
import React from 'react'

function LoginButton() {
  return (
    <button className="bg-blue-700 px-4 py-2 rounded-xl text-white w-fit mr-4 shadow-sm text-md cursor-pointer hover:shadow-none hover:bg-blue-800 hover:text-gray-100 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-800 focus:ring-opacity-60 active:bg-blue-900">
        Log In
    </button>
  )
}

export default LoginButton;