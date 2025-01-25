import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#222831] ">
      <div className="w-[45%] h-[60%] flex rounded-lg overflow-hidden">
        <div className=" w-1/2 h-full relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className=" w-1/2 h-full relative flex items-center justify-center">
          <div className=" w-full h-full flex justify-center items-center bg-[#31363F]">
            <form
              className="flex flex-col items-center justify-center w-[75%] h-full text-[#EEEEEE]"
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <label
                htmlFor="email"
                className="block text-base font-medium self-start pl-2 pb-1"
              >
                Email
              </label>
              <input
                value={email}
                type="email"
                id="email"
                placeholder="Enter your Email"
                required
                className="py-2 px-3 w-full rounded-3xl border border-gray-300"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label
                htmlFor="password"
                className="block text-base font-medium mt-3 self-start pl-2 pb-1"
              >
                Password
              </label>
              <input
                value={password}
                type="password"
                id="password"
                placeholder="Enter your Password"
                required
                className="py-2 px-3 w-full rounded-3xl border border-gray-300"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="py-2 px-3 mb-2 rounded-3xl text-white bg-blue-600 w-[100%] mt-5">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
