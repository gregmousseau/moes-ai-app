import React from 'react';

export default function SignInPage() {
  return (
    <div className="p-8 rounded shadow-md w-full max-w-md bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
          <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign In</button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">Don't have an account? <a href="/auth/sign-up" className="font-medium text-indigo-400 hover:text-indigo-300">Sign Up</a></p>
        <p className="text-sm text-gray-400">Forgot your password? <a href="/auth/forgot-password" className="font-medium text-indigo-400 hover:text-indigo-300">Reset It</a></p>
      </div>
    </div>
  );
}
