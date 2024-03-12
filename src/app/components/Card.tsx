type PropType = {
  id: string;
  company: string;
  position: string;
  src: string;
  logobg: string;
  location: string;
  postedAt: string;
  contract: string;
};

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
  return (
    <div className="flex w-[85%] h-[230px] bg-white items-start pl-6 justify-around  rounded-md relative flex-col">
      <div
        className={`absolute top-[-25px] h-[50px] w-[50px] rounded-xl flex items-center justify-center`}
        style={{ background: `${logobg}` }}
      >
        <img src={`${src}`} alt="" />
      </div>
      <div className="mt-10 flex flex-col items-start justify-center">
        <div className="flex items-center justify-between text-[#6E8098] w-[70%]">
          <p>{postedAt}</p>
          <div className="h-1 w-1 bg-[#6E8098] rounded-full"></div>
          <p>{contract}</p>
        </div>
        <p className="font-bold text-xl text-[#19202D] w-full">{position}</p>
        <p className="text-[#6E8098]">{company}</p>
      </div>
      <p className="text-[#5964E0] font-bold text-sm">{location}</p>
    </div>
  );
}
