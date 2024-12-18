import React, { useState } from 'react'
import { postRequest } from '../../../SelfModule/api/Apis'

const RegisterPage = () => {


  const [data, setData] = useState({});
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
  ]

  const registerFunc = ()=>{
    const val = postRequest('register', data);
  }

  return (
    <>
      <div className='h-[100vh] bg-sky-400 flex justify-center items-center'>
        <div className='h-[95%] sm:w-[50%]  bg-gray-100 rounded w-[90%]'>
          <h1 className='text-gray-900 text-3xl text-center'>Sign Up</h1>
          {
            registerFields.map((element, index) => {
              return <div className='mx-4 my-4'>
                <input type={element.type}
                onChange={(e)=>{
                  setData({...data, 
                    [element.name] : e.target.value
                  })
                }}
                className='pl-4 border border-gray-600 rounded h-[2rem] w-[98%] outline-none   border-solid focus:border-blue-500'
                  placeholder={element.placeholder} />
              </div>
            })
          }
<div className='px-4'>
          <button 
          onClick={registerFunc}
          className='w-[97%] bg-blue-700 text-white py-2 rounded'>Sign Up</button>
</div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage