import { useContext } from 'react';
import { GlobalStates } from '../data';

export default function Filter() {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { isOn } = context;
  return (
    <div className="w-[85%] h-20 absolute top-20">
      <div className={`w-full h-full relative `}>
        <input
          type="text"
          className={`w-full h-full rounded-md placeholder pl-6
           ${
             !isOn ? 'placeholder:text-[#19202D]' : 'placeholder:text-[#fff]'
           } placeholder:opacity-50 ${!isOn ? null : 'bg-[#19202D]'}`}
          placeholder="Filter by title…"
        />
        <div className="absolute right-0 top-0 flex gap-7 items-center justify-center  mt-4 mr-4">
          {!isOn ? (
            <img
              src="assets\mobile\icon-filter.svg"
              alt=""
              className="w-5 h-5 cursor-pointer"
            />
          ) : (
            <img
              src="assets\desktop\Search2.svg"
              alt=""
              className="w-5 h-5 cursor-pointer"
            />
          )}
          <div className="flex items-center justify-center w-12 h-12 bg-[#5964E0] rounded-md cursor-pointer">
            <img src="assets\desktop\icon-search.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
