import Card from './components/Card';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import data from './data.json';

export default async function Home() {
  return (
    <div className="bg-[#F4F6F8] relative flex items-center justify-center flex-col gap-24">
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
  );
}
