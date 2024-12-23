import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postRequest } from "../../../SelfModule/api/Apis";
import registerArr from "./registerArr";
import generateValidationSchema from "../../../component/createValidationSchema/validationSchema";
import generateInitialValue from "../../../component/genrateInitalValues/genrateInitalValues";
import GoogleSignInButton from "../../../component/googleSignInButton/GoogleSignInButton";

const Register = () => {
  const initialValues = generateInitialValue(registerArr);
  const validationSchema = generateValidationSchema(registerArr);

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = await postRequest("register", values);
    console.log(data);
    setSubmitting(false);
  };

  return (
    <section className="gradient-form h-[100vh] bg-neutral-200">
      <div className="h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[90vw] mx-auto">
          <div className="relative mx-auto md:w-[50%] w-full  bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
                <p className="mt-2 text-gray-500 font-bold">Sign up below to create your account</p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {registerArr?.map((field, index) => (
                      <div className="relative mt-4" key={index}>
                        <Field
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          autoCompleate={'off'}
                          className=" border rounded text-gray-900
                           mt-1 w-full pl-9 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none h-[2.4rem]"
                        />
                        <span className="absolute top-[13px] left-[10px]">
                          {field.icon}
                        </span>
                        <ErrorMessage
                          name={field.name}
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                    ))}
                    {/* Submit button */}
                    <div className="my-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                      >
                        {isSubmitting ? "Registering..." : "Register"}
                      </button>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <a href="#!" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                        Sign in
                      </a>.
                    </p>
                  </Form>
                )}
              </Formik>
                    <hr />
            <GoogleSignInButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
