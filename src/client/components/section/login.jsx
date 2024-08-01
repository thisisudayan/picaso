import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        <div className="w-1/2 p-10">
          <div className="flex items-center mb-6">
            <img src="path-to-logo" alt="Logo" className="h-8 w-auto" />
            <h2 className="text-xl font-semibold text-gray-700 ml-2">Memberstack</h2>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Log in to your Account</h3>
          <p className="text-gray-600 mb-4">Welcome back! Select method to log in:</p>
          <div className="flex flex-col gap-3 mb-6">
            <button className="flex items-center justify-center bg-red-500 text-white py-2 rounded-md">
              <img src="path-to-google-icon" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-md">
              <img src="path-to-facebook-icon" alt="Facebook" className="h-5 w-5 mr-2" />
              Facebook
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">or continue with email</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded-md" />
            <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded-md" />
            <a href="#" className="text-blue-500 text-sm mt-2 mb-6">Forgot Password?</a>
            <button className="bg-blue-500 text-white py-2 rounded-md">Submit</button>
          </div>
          <p className="text-gray-600 text-sm">
            Don’t have an account? <a href="#" className="text-blue-500">Create an account</a>
          </p>
        </div>
        <div className="w-1/2 bg-blue-500 p-10 text-white rounded-r-lg flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold mb-4">Complete your application</h3>
          <p className="text-center mb-6">Everything you need in an easily customizable dashboard</p>
          <img src="path-to-dashboard-image" alt="Dashboard" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;