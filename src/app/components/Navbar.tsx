'use client';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { GlobalStates } from '../data';
export default function Navbar() {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { setIson, isOn } = context;

  const toggleSwitch = () => {
    setIson(!isOn);
  };
  return (
    <div className="w-full h-[136px] bg-[#5964E0] flex items-start justify-between gap-9 pt-8 pl-6 pr-6 relative ">
      <img
        src="assets\mobile\bg-pattern-header.svg"
        alt=""
        className="absolute w-full top-0  left-0 h-full z-0"
      />
      <img src="assets/desktop/logo.svg" alt="" className="z-20" />
      <div className="w-[132px] h-6 flex items-center justify-center gap-4 z-10">
        <img src="/assets/desktop/icon-sun.svg" alt="" />
        <div className={`switch`} data-ison={isOn} onClick={toggleSwitch}>
          <motion.div
            className="handle"
            layout
            transition={{ type: 'spring', damping: 15 }}
          />
        </div>
        <img src="/assets/desktop/icon-moon.svg" alt="" />
      </div>
    </div>
  );
}
