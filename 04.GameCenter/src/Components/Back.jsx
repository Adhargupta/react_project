import React from 'react'
import { useNavigate } from 'react-router'

function Back() {
    const nevigate = useNavigate()
  return (
    <div className="counter-div flex justify-center">
        <button
            onClick={() => nevigate('/')}
            className="back group inline-flex items-center gap-2 rounded-xl px-5 py-2.5
                        bg-gradient-to-r from-gray-100 to-gray-300
                        text-black font-semibold shadow-lg
                        transition-all duration-200
                        hover:shadow-xl hover:translate-y-[-1px] active:translate-y-0"
            >
            <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
                Back
        </button>
        </div>
  )
}

export default Back