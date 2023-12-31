import React, { useState } from "react";
import { FaEye, FaEyeSlash , FaEdit} from "react-icons/fa";
const Profile = () => {
  const [editingEnable, setEditingEnable] = useState(false);
  const [name, setName] = useState("Mentee123");
  const [email, setEmail] = useState("mentee1232@gmail.com");
  const[username,setUsername]= useState("@mentee1")
  const [phone, setPhone] = useState("+91 684100054848");
  const [password, setPassword] = useState("12348y6");
  const [showPassword, setShowPassword] = useState(false);
  const handleProfileEdit = () => {
    setEditingEnable(true);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full py-7 flex flex-col justify-center items-center border rounded-lg ">
        <h1 className="text-3xl font-bold mb-4 text-black">Mentee Profile</h1>
        <div className="flex flex-col space-y-4 w-full px-6">
          <div className="flex justify-center">
          <img
              className="object-cover w-28 h-28 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            {editingEnable && (
              <div className="absolute ml-28 mt-1 mr-1">
                <FaEdit className="text-black cursor-pointer" />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col col-span-1">
            <label htmlFor="name" className="text-black mb-1">Name</label>
            <input
              id="name"
              value={name}
              type="text"
              className={`${
                editingEnable ? "" : "cursor-not-allowed"
              } text-black border-2 p-2 rounded bg-white`}
              onChange={(e) => handleInputChange(e, "name")}
              disabled={!editingEnable}
            />
          </div>
          <div className="flex flex-col col-span-1">
            <label htmlFor="branch" className="text-black mb-1">Branch</label>
            <select
              required
              id="branch"
              name="level"
              className={`${
              editingEnable ? "" : "cursor-not-allowed"}
              text-black border-2 p-2 rounded bg-white`}
              onChange={(e) => handleInputChange(e, "name")} 
              disabled={!editingEnable}>
              <option>CS</option>
              <option>IT</option>
              <option>EE</option>
         </select>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col col-span-1">
            <label htmlFor="username" className="text-black mb-1">UserName</label>
            <input
              id="username"
              value={username}
              type="text"
              className={`${
                editingEnable ? "" : "cursor-not-allowed"
              } text-black border-2 p-2 rounded bg-white`}
              onChange={(e) => handleInputChange(e, "email")}
              disabled={!editingEnable}
            />
          </div>
          <div className="flex flex-col col-span-1">
            <label htmlFor="email" className="text-black mb-1">Email</label>
            <input
              id="email"
              value={email}
              type="text"
              className={`${
                editingEnable ? "" : "cursor-not-allowed"
              } text-black border-2 p-2 rounded bg-white`}
              onChange={(e) => handleInputChange(e, "email")}
              disabled={!editingEnable}
            />
          </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-black mb-1">Phone</label>
            <input
              id="phone"
              value={phone}
              type="text"
              className={`${
                editingEnable ? "" : "cursor-not-allowed"
              } text-black border-2 p-2 rounded bg-white`}
              onChange={(e) => handleInputChange(e, "phone")}
              disabled={!editingEnable}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-black mb-1">Password</label>
            <input
              id="password"
              value={password}
              type={showPassword ? "text" : "password"}
              className={`${
                editingEnable ? "" : "cursor-not-allowed"
              } text-black border-2 p-2 rounded bg-white`}
              onChange={(e) => handleInputChange(e, "password")}
              disabled={!editingEnable}
            />
             <div
              className="absolute right-12 mt-10 cursor-pointer text-black"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div className="flex space-x-2 w-full px-6">
          <button
            className="text-white w-full bg-blue-500 py-2 px-8 mt-4 rounded"
            onClick={handleProfileEdit}
            disabled={editingEnable}
          >
            Edit Profile
          </button>
          <button
            className="text-white w-full bg-blue-500 py-2 px-8 mt-4 rounded"
          >
           Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
