import React from 'react';
import google from "./google-color.svg";

const GoogleSignInButton = () => {
  return (
    <div className="mt-4
    shadow-md
    w-full
    border
    rounded
    flex items-center justify-center  dark:bg-gray-800">
    <button class="  px-4 py-2 flex gap-2  rounded-lg text-slate-700 dark:text-slate-200 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <img class="w-6 h-6" src={google} loading="lazy" alt="google logo" />
        <span>Login with Google</span>
    </button>
</div>
  )
}

export default GoogleSignInButton