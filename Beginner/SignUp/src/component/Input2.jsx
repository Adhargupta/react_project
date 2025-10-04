import React from 'react'

function Input2() {
  return (
    // <div className="flex justify-center">
    //     <div className="flex w-[380px] space-y-3">
    //         <div className="relative w-[300px]">
    //             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    //             <img 
    //                 src="https://www.pngarts.com/files/10/Email-Icon-Logo-PNG-Transparent-Image.png" 
    //                 alt="icon" 
    //                 className="w-5 h-5 mix-blend-color-burn"
    //             />
    //             </span>
    //             <input
    //             className="w-full h-10 bg-gray-200 rounded-2xl text-black pl-11 pr-4"
    //             placeholder="Email id"
    //             type="text"
    //             />
    //         </div>
    
    //         <div className="relative w-[300px]">
    //             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    //             <img 
    //                 src="https://www.pngarts.com/files/10/Email-Icon-Logo-PNG-Transparent-Image.png" 
    //                 alt="icon" 
    //                 className="w-5 h-5 mix-blend-color-burn"
    //             />
    //             </span>
    //             <input
    //             className="w-full h-10 bg-gray-200 rounded-2xl text-black pl-11 pr-4"
    //             placeholder="Email id"
    //             type="text"
    //             />
    //         </div>
    //     </div>
    // </div>
    <div className='flex flex-col gap-5'>
        <div className="flex justify-center">
            <div className="relative w-[300px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img 
                    src="https://www.pngarts.com/files/10/Email-Icon-Logo-PNG-Transparent-Image.png" 
                    alt="icon" 
                    className="w-5 h-5"
                />
                </span>
                <input
                className="w-full h-13 bg-gray-200 rounded-2xl text-black pl-12 pr-4"
                placeholder="Email id"
                type="text"
                />
            </div>
        </div>
        <div className="flex justify-center">
            <div className="relative w-[300px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIy0EU-aDzqkCdtMZndw2oBPhiXtdvf5FuEg&s" 
                    alt="icon" 
                    className="w-5 h-5 mix-blend-color-burn"
                />
                </span>
                <input
                className="w-full h-13 bg-gray-200 rounded-2xl text-black pl-12 pr-4"
                placeholder="Password"
                type="text"
                />
            </div>
        </div>
    </div>
  
  )
}

export default Input2