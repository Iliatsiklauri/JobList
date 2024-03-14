import { useContext } from 'react';
import { GlobalStates } from '../data';
import Link from 'next/link';
import { PropType } from '../data';

export default function Card({
  src,
  id,
  company,
  position,
  logobg,
  location,
  postedAt,
  contract,
}: PropType) {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { isOn } = context;
  return (
    <Link href={`/details/${id}`} className="w-[85%] h-[230px]">
      <div
        className={`flex w-full h-full items-start pl-6 justify-around  rounded-md relative flex-col cursor-pointer ${
          isOn ? 'bg-[#19202D]' : 'bg-[white]'
        }`}
        onClick={() => console.log(id)}
      >
        <div
          className={`absolute top-[-25px] h-[50px] w-[50px] rounded-xl flex items-center justify-center`}
          style={{ background: `${logobg}` }}
        >
          <img src={`${src}`} alt="" />
        </div>
        <div className="mt-10 flex flex-col items-start justify-center gap-[6px]">
          <div className="flex items-center justify-between text-[#6E8098] w-[65%]">
            <p>{postedAt}</p>
            <div className="h-1 w-1 bg-[#6E8098] rounded-full"></div>
            <p>{contract}</p>
          </div>
          <p
            className={`font-bold text-md md:text-xl  ${
              !isOn ? 'text-[#19202D]' : 'text-[#FFF]'
            }`}
          >
            {position}
          </p>
          <p className="text-[#6E8098]">{company}</p>
        </div>
        <p className="text-[#5964E0] font-bold text-sm">{location}</p>
      </div>
    </Link>
  );
}
