import React from 'react'
import cardOne from '../assets/wall-1.jpg'
import cardTwo from '../assets/wall-2.jpg'
import cardThree from '../assets/wall-3.jpg'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-between w-[300px] p-3 gap-4  bg-[#E2EEFF] dark:bg-[#1212138e] rounded-md'>
            <img className='max-w-32 max-h-28 object-cover rounded-md' src={cardOne} alt="" />

            <div>
                <h4 className='text-lg font-medium mb-2 '>Day advantages end sufficient eat towards</h4>
                <span className='text-sm font-medium'>3 weeks ago</span>
            </div>
        </div>



        <div className='flex justify-between w-[300px] p-3 gap-4  bg-[#E2EEFF] dark:bg-[#1212138e] rounded-md'>
            <img className='max-w-32 max-h-28 object-cover rounded-md' src={cardTwo} alt="" />

            <div>
                <h4 className='text-lg font-medium mb-2'>own handsome delicate it's property mistress</h4>
                <span className='text-sm font-medium'>3 weeks ago</span>
            </div>
        </div>



        <div className='flex justify-between w-[300px] p-3 gap-4  bg-[#E2EEFF] dark:bg-[#1212138e] rounded-md'>
            <img className='max-w-32 max-h-28 object-cover rounded-md' src={cardThree} alt="" />

            <div>
                <h4 className='text-lg font-medium mb-2'>My entrance me disposal bachelor</h4>
                <span className='text-sm font-medium'>3 weeks ago</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar