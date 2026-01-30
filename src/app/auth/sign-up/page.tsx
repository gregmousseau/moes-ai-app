import React from 'react';

export default function SignUpPage() {
  return (
    <div className="p-8 rounded shadow-md w-full max-w-md bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
          <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">Already have an account? <a href="/auth/sign-in" className="font-medium text-indigo-400 hover:text-indigo-300">Sign In</a></p>
      </div>
    </div>
  );
}
