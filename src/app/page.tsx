'use client';
import Card from './components/Card';
import Filter from './components/Filter';
import data from './data.json';
import { GlobalStates } from './data';
import { useState } from 'react';
import Navbar from './components/Navbar';
export default function Home() {
  const [isOn, setIson] = useState(false);
  return (
    <GlobalStates.Provider value={{ isOn, setIson }}>
      <div
        className={`${
          !isOn ? 'bg-[#F4F6F8]' : 'bg-[#121721]'
        } relative flex items-center justify-center flex-col gap-24`}
      >
        <Navbar />
        <Filter />

        <main className="flex items-center justify-center flex-col w-full gap-12 md:grid grid-cols-2">
          {data.map((el, key) => (
            <Card
              postedAt={`${el.postedAt}`}
              contract={`${el.contract}`}
              location={`${el.location}`}
              logobg={`${el.logoBackground}`}
              src={el.logo}
              key={key}
              company={`${el.company}`}
              id={`${el.id}`}
              position={`${el.position}`}
            />
          ))}
        </main>
      </div>
    </GlobalStates.Provider>
  );
}
