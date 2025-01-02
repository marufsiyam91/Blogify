import React from 'react'
import BlogOne from '../assets/BlogOne.jpg'


const BlogCard = () => {
  return (
    <div>

<h2 className="text-3xl font-medium mb-8">Blog</h2>

        <div className='flex justify-between'>
            <img className='relative max-w-[320px] object-cover rounded-2xl h-[350px]' src={BlogOne} alt="" />
            <div className=''>
                    <h4>2 months ago</h4>
                <h2>The Absolutely Ridiculous History</h2>

                <div>
                    <h4>Even if I’ve never planned a photo shoot in my life, if I get the job that requires photo shoot setup I’m going to figure out...</h4>
                </div>


            </div>
        </div>
    </div>
  )
}

export default BlogCard