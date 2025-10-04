import React from 'react'
import Input1 from '../component/Input1'
import Input2 from '../component/Input2'
import Button from '../component/Button'

function SignUP() {
  return (
    <div className='w-[380px] h-[470px] bg-white rounded-2xl shadow-md shadow-black'>
        <div className="upper flex justify-center py-7.5 text-4xl font-semibold text-blue-950">
            <span>Sign Up</span>
        </div>
        <div className="flex justify-center mt-[-29px]">
            <div className="w-[45px] bg-blue-950 h-1 ml-[20px]"></div>
        </div>
        <div className="mt-[65px]">
            <Input1/>
            <Input2/>
            <Button/>
        </div>
    </div>
  )
}

export default SignUP