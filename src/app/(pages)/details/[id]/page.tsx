'use client';
import Aboutop from '@/app/components/Aboutop';
import data from '/src/app/data.json';
import { PropType } from '/src/app/data.ts';
import Headet from '@/app/components/Headet';
import Mainn from '@/app/components/Main';
import Button from '@/app/components/Button';

type paramType = {
  params: {
    id: string;
  };
};
export default function page({ params }: paramType) {
  const res: PropType = data[Number(params.id) - 1];
  return (
    <div className="flex items-center justify-center flex-col bg-[#F4F6F8] gap-10">
      <Aboutop />
      <Headet
        src={`${res.logo}`}
        company={`${res.company}`}
        logobg={res.logoBackground}
      />
      <Mainn
        company={res.company}
        contract={res.contract}
        postedAt={res.postedAt}
        position={res.position}
        location={res.location}
        description={res.description}
        requirements={res.requirements.content}
        items={res.requirements.items}
        content={res.role.content}
        bullet={res.role.items}
      />
      <div className="w-full p-5 bg-white ">
        <Button />
      </div>
    </div>
  );
}
