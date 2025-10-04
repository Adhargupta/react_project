import React from 'react'

function Input1() {
  return (
    <div className="flex justify-center pb-5">
        <div className="relative w-[300px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCSMkWaF4ReLMfiRu3NXk12zJikhfSx0bSQ&s" 
                alt="icon" 
                className="w-5 h-5 mix-blend-color-burn"
            />
            </span>
            <input
            className="w-full h-13 bg-gray-200 rounded-2xl text-black pl-12 pr-4"
            placeholder="Username"
            type="text"
            />
        </div>
    </div>

  )
}

export default Input1