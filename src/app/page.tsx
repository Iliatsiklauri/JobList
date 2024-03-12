import Card from './components/Card';
import data from './data.json';

export default async function Home() {
  return (
    <div className="flex items-center justify-center flex-col w-full gap-10">
      {data.map((el, key) => (
        <Card
          key={key}
          company={`${el.company}`}
          id={`${el.id}`}
          position={`${el.position}`}
        />
      ))}
    </div>
  );
}
