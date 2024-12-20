import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postRequest } from "../../../SelfModule/api/Apis";
import registerArr from "./registerArr";
import generateValidationSchema from "../../../component/createValidationSchema/validationSchema";
import generateInitialValue from "../../../component/genrateInitalValues/genrateInitalValues";

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
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800">
              <div className="px-4 md:px-0">
                <div className="md:mx-6 md:p-12">
                  <div className="text-center">
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-bold">Create an Account</h4>
                  </div>
                  <Formik
                    initialValues={initialValues} 
                    validationSchema={validationSchema} 
                    onSubmit={handleSubmit} 
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        {registerArr?.map((field, index) => (
                          <div className="relative my-4" key={index}>
                            <Field
                              type={field.type}
                              name={field.name}
                              id={field.name}
                              placeholder={field.placeholder}
                              className="border border-gray-300 outline-none peer block min-h-[auto] w-full pl-9 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600 focus:border rounded"
                            />
                            {/* Icon rendering */}
                            <span className="absolute top-[12px] left-[10px] border border-r">
                              {field.icon}
                            </span>
                            {/* Error message rendering */}
                            <ErrorMessage
                              name={field.name}
                              component="div"
                              className="text-red-600 text-sm"
                            />
                          </div>
                        ))}

                        {/* Submit button */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                            }}
                          >
                            {isSubmitting ? "Registering..." : "Register"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
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
