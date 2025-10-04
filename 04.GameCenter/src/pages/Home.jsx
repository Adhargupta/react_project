import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router'

function Home(props) {
    const element = useRef()
    const navigate = useNavigate()
    // console.log(props.arr_head.length);
    const heading = props.arr_head
    const para = props.arr_para

  return (
    <div ref={element} className="container w-[90vw] bg-amber-50 h-auto">
        {heading.map((head, i) => (
        <div
          key={i} // helps React track elements
          className="box w-72 h-auto bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between"
        >
          {/* Card Content */}
          <div>
            <h2 className="heading text-2xl font-semibold pb-2">{head}</h2>
            <p className="para text-gray-600 text-sm mt-1">{para[i]}</p>
          </div>

          {/* Button at the bottom */}
          <div className="play">
            <button onClick={()=>navigate(`./${head}`)} className="btn mt-4 w-full text-black py-2 rounded-xl hover:bg-orange-600 transition">
              ▶ Play
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Home