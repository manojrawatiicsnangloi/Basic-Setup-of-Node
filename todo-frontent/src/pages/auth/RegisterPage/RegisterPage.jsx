import React, { useState } from "react";
import EmailIc from "../../../imgIc/emailIc";
import LockIc from "../../../imgIc/LockIc";
import { postRequest } from "../../../SelfModule/api/Apis";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);


  const registerFields = [
    {
      type: 'text',
      placeholder: "Enter you Email",
      require: true,
      name: "email",
      id: "email"
    },
    {
      type: 'text',
      placeholder: "Enter you Name",
      require: true,
      name: "username",
      id: "username"
    },
    {
      type: 'password',
      placeholder: "Enter you password",
      require: true,
      name: "password",
      id: "password"
    },
    {
      type: 'password',
      placeholder: "Enter you password",
      require: true,
      name: "confirmPassword",
      id: "password"
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Submit the form data (API integration can be added here)
    const data = postRequest('register', formData);
    console.log(data);
  };

  return (
    <section className="gradient-form h-[100vh] bg-neutral-200">
      <div className="h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800">
              <div className="px-4 md:px-0">
                <div className="md:mx-6 md:p-12">
                  <div className="text-center">
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-bold">
                      Create an Account
                    </h4>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {registerFields.map((field, index) => (
                      <div
                        className="relative my-4"
                        data-te-input-wrapper-init
                        key={index}
                      >
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.name}
                          required={field.require}
                          placeholder={field.placeholder}
                          className="border border-gray-300 outline-none peer block min-h-[auto] w-full pl-9 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600 focus:border rounded"
                          onChange={handleInputChange}
                        />

                        {/* Icons based on field name */}
                        <span className="absolute top-[12px] left-[10px] border border-r">
                          {field.name === "email" && <EmailIc />}
                          {(field.name === "password" || field.name === "confirmPassword") && (
                            <LockIc />
                          )}
                        </span>
                      </div>
                    ))}
                    {/* Error message display */}
                    {error && (
                      <div className="text-red-600 text-sm mb-4 text-center">
                        {error}
                      </div>
                    )}
                    <div className="mb-12 pb-1 pt-1 text-center">
                      <button
                        className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                        type="submit"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
