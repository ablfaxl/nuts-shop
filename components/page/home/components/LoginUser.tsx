const LoginUser = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col w-screen">
            <h1 className="text-4xl font-bold">Log in</h1>
            <div className="mt-16 relative">
                <input
                    id="email"
                    type="email"
                    className="border-[1px] border-gray-600 p-2 rounded-lg w-36 md:w-80 text-sm text-gray-600 focus:outline-none h-8 peer placeholder-transparent"
                />
                <label
                    htmlFor="email"
                    className="cursor-text absolute left-0 top-[5px] px-2 text-gray-600 text-sm peer-focus:top-[-11px] peer-focus:left-[4px] peer-focus:bg-white transition-all peer-placeholder-shown:top-[5px]"
                >
                    email
                </label>
            </div>
            <div className="mt-8 relative">
                <input
                    id="password"
                    type="password"
                    className="border-[1px] border-gray-600 p-2 rounded-lg w-36 md:w-80 text-sm text-gray-600 focus:outline-none h-8 peer placeholder-transparent"
                />
                <label
                    htmlFor="password"
                    className="cursor-text absolute left-0 top-[5px] px-2 text-gray-600 text-sm  peer-focus:top-[-11px] peer-focus:left-[4px] peer-focus:bg-white transition-all peer-placeholder-shown:top-[5px]"
                >
                    password
                </label>
            </div>
            <div className="flex w-36 md:w-80">
                <span className="cursor-pointer flex text-[.7rem] underline text-gray-600">
                    Forgot your password?
                </span>
            </div>
            <div className="mt-16">
                <button className="bg-[#D96B14] w-36 md:w-80 text-sm rounded-lg py-2 text-white font-bold hover:bg-[#c55f11] transition-all active:scale-95">
                    Sing in
                </button>
            </div>
        </div>
    );
};

export default LoginUser;
