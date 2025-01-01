import myImage from "../assets/maruf.jpeg"
import author from '../assets/author.jpg'

const HeroCard = () => {
  return (
        <div className='dark:text-[#CBC6C0] text-[#282b2c] mx-auto max-w-screen-xl'>
            <div className=''>
                <div className='flex h-auto rounded-xl bg-[#E2EEFF] dark:bg-[#1212138e] overflow-hidden w-full'>
                <img className='w-[50%] max-h-[410px] object-cover' src={myImage} alt="Maruf Siyam" />
    
                <div className='p-6'>
                    <div className='flex items-end gap-2 mb-6'>
                        <img className='w-10 h-10 object-cover rounded-full' src={author} alt="" />
                        <div className='flex flex-col gap-0 text-sm font-medium'>
                            <span>Maruf Siyam</span>
                            <span>3 weeks ago</span>
                        </div>
                    </div>
                    <h2 className='text-5xl'>The Journey of Self-Discovery: How Embracing Change Leads to Personal Growth</h2>
    
                    <div className='mt-6'>
                        <span>2 min read</span> <span>.</span> <span>2 views</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default HeroCard