import React from 'react';

export default function ForgotPasswordPage() {
  return (
    <div className="p-8 rounded shadow-md w-full max-w-md bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset Password</button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">Remembered your password? <a href="/auth/sign-in" className="font-medium text-indigo-400 hover:text-indigo-300">Sign In</a></p>
      </div>
    </div>
  );
}
