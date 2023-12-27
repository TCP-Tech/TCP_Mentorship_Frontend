import React from "react";
import Menteeimg from "../../assets/images/Menteeimg.jpg";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className=" text-center">
          <button
            type="button"
            id="mentee"
            className="rounded-full mx-1 my-1 p-2 border-4 border-blue-600"
          >
            <img src={Menteeimg} alt="" className="h-36 w-36 rounded-full" />
            <span className="text-black">Mentee</span>
          </button>
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up with your details
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {/* FullName */}
          <div>
            <label
              for="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="fullname"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>
          {/* username */}
          <div>
            <label
              for="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>
          {/* Confirm Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                for="cnfpassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="cnfpassword"
                name="cnfpassword"
                type="password"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>
          {/* Phonenumber */}
          <div>
            <label
              for="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>

          {/* {Branch} */}
          <div>
            <div
              for="Branch"
              className=" text-sm font-medium leading-6 text-gray-900"
            >
              Branch
              <select
                name="branch"
                id="branch"
                className="text-black mx-4 bg-white"
              >
                <option value="select" default>
                  Select
                </option>
                <option value="cse">CSE</option>
                <option value="it">IT</option>
                <option value="ece">ECE</option>
                <option value="ee">EE</option>
                <option value="mech">MECH</option>
                <option value="civil">CIVIL</option>
                <option value="chem">CHEM</option>
                <option value="meta">META</option>
                <option value="min">MIN</option>
                <option value="biotech">BIOTECH</option>
                <option value="biomed">BIOMED</option>
                <option value="mca">MCA</option>
              </select>
            </div>
          </div>

          {/* {Semester} */}
          <div>
            <div
              for="sem"
              className=" text-sm font-medium leading-6 text-gray-900"
            >
              Semester
              <select name="sem" id="sem" className="text-black mx-4 bg-white">
                <option value="select" default>
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          {/* Leetcode link */}
          <div>
            <label
              for="leetcode"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Leetcode Link
            </label>
            <div className="mt-2">
              <input
                id="leetcode"
                name="leetcode"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>
          {/* Codechef link */}
          <div>
            <label
              for="codechef"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Codechef Link
            </label>
            <div className="mt-2">
              <input
                id="codechef"
                name="codechef"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2 bg-white"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already registered?
          <Link
            to="/login"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Sign IN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
