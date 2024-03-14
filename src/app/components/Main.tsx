import React from 'react';
import { PropType } from '../data';
import Button from './Button';
export default function Mainn({
  postedAt,
  contract,
  position,
  location,
  description,
  requirements,
  items,
  content,
  bullet,
}: PropType) {
  return (
    <div className="w-[90%] bg-white flex flex-col items-start justify-center p-7 text-left gap-10">
      <div className="w-full flex items-start justify-center flex-col gap-12">
        <div className="flex flex-col items-start gap-3 justify-center w-full">
          <div className="flex items-center justify-between text-[#6E8098] w-[65%] ">
            <p>{postedAt}</p>
            <div className="h-1 w-1 bg-[#6E8098] rounded-full"></div>
            <p>{contract}</p>
          </div>
          <p className={`font-bold text-xl text-[#19202D]`}>{position}</p>
          <p className="text-[#5964E0] font-bold text-sm">{location}</p>
        </div>
        <div className=" w-full cursor-pointer">
          <Button />
        </div>
      </div>
      <p className="text-[#6E8098] leading-[26px]">{description}</p>
      <h1 className="text-black font-bold text-xl">Requirements</h1>
      <p className="text-[#6E8098] leading-[26px]">{requirements}</p>
      <ul className="flex gap-3 flex-col">
        {items.map((el: string, key: number) => (
          <li key={key} className="text-[#6E8098] flex items-start justify-start gap-5">
            <div className="w-[5px] h-[5px] bg-[#5964E0] rounded-full flex-shrink-0 mt-2"></div>
            {el}
          </li>
        ))}
      </ul>
      <h1 className="text-black font-bold text-xl">What You Will Do</h1>
      <p className="text-[#6E8098] leading-[26px]">{content}</p>
      <ul className="flex gap-3 flex-col">
        {bullet.map((el, key) => (
          <li key={key} className="text-[#6E8098] flex items-start justify-start gap-5">
            <div className=" rounded-full flex-shrink-0 text-[#5964E0]">{key + 1}</div>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
