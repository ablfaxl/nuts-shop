import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col w-screen">
      <h1 className="text-4xl font-bold">Log in</h1>
      <div className="mt-16 relative">
        <label className="absolute left-4 top-[-11px] bg-white px-3 text-gray-600 text-sm">
          email
        </label>
        <input
          type="email"
          className="border-[1px] border-gray-600 p-2 rounded-lg w-36 md:w-80 text-sm text-gray-600 focus:outline-none h-8"
        />
      </div>
      <div className="mt-8 relative">
        <label className="absolute left-4 top-[-11px] bg-white px-3 text-gray-600 text-sm">
          password
        </label>
        <input
          type="password"
          className="border-[1px] border-gray-600 p-2 rounded-lg w-36 md:w-80 text-sm text-gray-600 focus:outline-none h-8"
        />
      </div>
      <div className="flex w-36 md:w-80">
        <span className="cursor-pointer flex text-[.7rem] underline text-gray-600">
          Forgot your password?
        </span>
      </div>
      <div className="mt-16">
        <button className="bg-[#D96B14] w-36 md:w-80 text-sm rounded-lg py-2 text-white font-bold hover:bg-[#b95910] transition-all">
          Sing in
        </button>
      </div>
    </div>
  );
};

export default Login;
