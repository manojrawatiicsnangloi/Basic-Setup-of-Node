import React, { useContext, useEffect, useState } from "react";
import lotus from "./lotus.webp";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { postRequest } from "../../../SelfModule/api/Apis";
import { Navigate, NavLink } from "react-router-dom";

const MyLogin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginFunc = async (e) => {

        e.preventDefault();
        const data = await postRequest('login', { email, password });
    }

    useEffect(() => {
    }, []);

    return (
        <section className="gradient-form h-[100vh] bg-neutral-200">
            <div className=" h-full p-10">
                <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800">
                            <div className="px-4 md:px-0">
                                <div className="md:mx-6 md:p-12">
                                    <div className="text-center">
                                        <img
                                            className="mx-auto w-48"
                                            src={lotus}
                                            alt="logo"
                                        />
                                        <h4 className="mb-12 mt-1 pb-1 text-xl font-bold">
                                            Welcome to CRMHUT
                                        </h4>
                                    </div>
                                    <form
                                        onSubmit={loginFunc}
                                    >
                                        {/* Username input */}
                                        <div className="relative my-4" data-te-input-wrapper-init>
                                            <input
                                                type="email"
                                                id="username"
                                                name="username"
                                                required
                                                className=" border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-9 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded"
                                                placeholder="Enter your Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <span className="absolute top-[8px] left-[8px] ">
                                                <MdEmail size={25} />
                                            </span>
                                        </div>
                                        {/* Password input */}
                                        <div className="relative my-4" data-te-input-wrapper-init>
                                            <input
                                                type="password"
                                                name="password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="border border-gray-300 outline-none peer 
                                                 block min-h-[auto] w-full pl-9 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded"
                                                id="exampleFormControlInput11"
                                                placeholder="Enter Your Password"
                                            />

                                            <span className="absolute top-[7px] left-[8px]">
                                                <FaLock size={21} />
                                            </span>
                                        </div>
                                        <div className=" pb-1 pt-1 text-center">
                                            <button
                                                className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                                                type="submit"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                style={{
                                                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                }}
                                            >
                                                Submit
                                            </button>
                                        </div>

                                        <div className=" pb-1 pt-1 text-center">
                                            <button
                                                // className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                                                className='text-blue-500 underline'
                                                type="button"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                style={{
                                                    // background: "black",
                                                }}
                                            >
                                                {"Forgot Password ?"}
                                            </button>
                                        </div>
                                    </form>
                                    <hr />
                                    <div className="mt-4 pb-1 pt-1 text-center">
                                        <button
                                            // className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                                            type="button"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            style={{
                                                // background: "black",
                                            }}

                                        >
                                            <span>Don't have an account?</span>

                                                 <button
                                                
                                                className='text-blue-500 underline'>
                                                    
                                            <NavLink to={'/register'}>
                                                    SignUp
                                                    </NavLink>
                                                    </button>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyLogin;