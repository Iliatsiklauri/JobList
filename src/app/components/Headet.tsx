type PropType = {
  src: string;
  company: string;
  logobg: string;
};

export default function Headet({ src, company, logobg }: PropType) {
  return (
    <div className="w-[90%] flex items-center justify-center flex-col bg-white gap-4 p-10 mt-[-70px] z-50 rounded-md relative">
      <div
        className={`h-[50px] w-[50px] rounded-xl flex items-center justify-center absolute top-[-25px]`}
        style={{ background: `${logobg}` }}
      >
        <img src={`${src}`} alt="" className="" />
      </div>
      <h1 className="font-bold text-xl">{company}</h1>
      <h1 className="text-[#6E8098]">{company}.com</h1>
      <div className="flex items-center justify-center rounded-md bg-[#F4F6F8] h-12 w-[147px] text-[#5964E0] font-bold">
        Company Site
      </div>
    </div>
  );
}
