import React from 'react'
import Button from '../component/Button'
import Input2 from '../component/Input2'

function SignIn() {
  return (
    <div className='w-[380px] h-[400px] bg-white rounded-2xl shadow-md shadow-black'>
        <div className="upper flex justify-center py-7.5 text-4xl font-semibold text-blue-950">
            <span>Sign In</span>
        </div>
        <div className="flex justify-center mt-[-29px]">
            <div className="w-[45px] bg-blue-950 h-1 ml-[20px]"></div>
        </div>
        <div className="mt-[65px]">
            {/* <Input1/> */}
            <Input2/>
            <Button/>
        </div>
    </div>
  )
}

export default SignIn