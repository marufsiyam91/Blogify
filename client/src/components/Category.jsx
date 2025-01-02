import React from "react";
import categoryOne from "../assets/categoryOne.jpg";
import categoryTwo from "../assets/categoryTwo.jpg";
import categoryThree from "../assets/categoryThree.jpg";

const Category = () => {
  return (
    <div>
      <h2 className="text-3xl font-medium mb-8">Category</h2>

      <div className="flex justify-between gap-10">
        {/* First Card */}
        <div className="relative flex-1 flex flex-col items-start">
          <div className="rounded-md overflow-hidden flex flex-col justify-between bg-[#DAECF3] h-full">
            <h2 className="absolute flex items-center gap-1 top-10 left-0 text-sm font-medium origin-bottom rotate-[270deg]">
              <div className="w-2 h-2 rounded-full bg-[#DAECF3]"></div> Art & Design
            </h2>

            <img
              className="max-h-40 w-full object-cover top-0"
              src={categoryOne}
              alt=""
            />

            <div className="p-8">
              <h2 className="text-2xl font-medium text-[#0C3347]">
                Day advantages end sufficient eat towards
              </h2>
              <h4 className="text-[#0C3347] text-sm font-medium mt-4">
                02 views
              </h4>
            </div>

            <div className="flex items-center justify-center py-3 w-full  bg-[#D1E3E9] gap-2">
              <h4 className="font-medium text-[#0C3347]">Maruf Siyam</h4>
              <h4 className="font-medium text-[#0C3347]">.</h4>
              <h4 className="font-medium text-[#0C3347]">3 weeks ago</h4>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative flex-1 flex flex-col items-start">
          <div className="rounded-md overflow-hidden flex flex-col justify-between bg-[#FF414D] h-full">
          <h2 className="absolute flex items-center gap-1 top-10 left-0 text-sm font-medium origin-bottom rotate-[270deg]">
              <div className="w-2 h-2 rounded-full bg-[#DAECF3]"></div> Lifestyle
            </h2>

            <img
              className="max-h-40 w-full object-cover top-0"
              src={categoryTwo}
              alt=""
            />

            <div className="p-8">
              <h2 className="text-2xl font-medium text-[#FFFFFF]">
                Own handsome delicate it's property mistress
              </h2>
              <h4 className="text-[#FFFFFF] text-sm font-medium mt-4">
                02 views
              </h4>
            </div>

            <div className="flex justify-center py-3 w-full bg-[#F53E4A] gap-2 text-[#FFFFFF]">
              <h4 className="font-medium text-[#FFFFFF]">Maruf Siyam</h4>
              <h4>.</h4>
              <h4 className="font-medium text-[#FFFFFF]">3 weeks ago</h4>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative flex-1 flex flex-col items-start">
          <div className="rounded-md overflow-hidden flex flex-col justify-between bg-[#1AA6B7] h-full">
          <h2 className="absolute flex items-center gap-1 top-10 left-0 text-sm font-medium origin-bottom rotate-[270deg]">
              <div className="w-2 h-2 rounded-full bg-[#DAECF3]"></div> Beauty
            </h2>

            <img
              className="max-h-40 w-full object-cover top-0"
              src={categoryThree}
              alt=""
            />

            <div className="p-8">
              <h2 className="text-2xl font-medium text-[#FFFFFF]">
                My entrance me disposal bachelor
              </h2>
              <h4 className="text-[#FFFFFF] text-sm font-medium mt-4">
                02 views
              </h4>
            </div>

            <div className="flex justify-center py-3 w-full bg-[#199FB0] gap-2 text-[#FFFFFF]">
              <h4 className="font-medium text-[#FFFFFF]">Maruf Siyam</h4>
              <h4>.</h4>
              <h4 className="font-medium text-[#FFFFFF]">3 weeks ago</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
