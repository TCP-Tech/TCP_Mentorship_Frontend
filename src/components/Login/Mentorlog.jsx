import React from 'react'

const Mentorlog = () => {
  return (
    <div  className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  className="space-y-6" action="#" method="POST">
      <div>
        <label for="email"  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div  className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2" />
        </div>
      </div>

      <div>
        <div  className="flex items-center justify-between">
          <label for="password"  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div  className="text-sm">
            <a href="#"  className="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</a>
          </div>
        </div>
        <div  className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2"/>
        </div>
      </div>

      <div>
        <button type="submit"  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Log in</button>
      </div>
    </form>

    {/* <p  className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#"  className="font-semibold leading-6 text-blue-600 hover:text-blue-500">SignUP</a>
    </p> */}
  </div>
  )
}

export default Mentorlog