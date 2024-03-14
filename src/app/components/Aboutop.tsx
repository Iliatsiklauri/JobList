import Link from 'next/link';
import React from 'react';

export default function Aboutop() {
  return (
    <div className="w-full h-[136px] flex items-start justify-center relative">
      <img
        src="/assets/mobile/bg-pattern-header.svg"
        alt=""
        className="absolute w-full top-0  left-0 h-full z-0"
      />
      <Link href={'/'} className="z-40 top-3 mt-8">
        <img src="/assets/desktop/logo.svg" alt="" />
      </Link>
    </div>
  );
}
