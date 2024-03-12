type PropType = {
  id: string;
  company: string;
  position: string;
};

export default function Card({ id, company, position }: PropType) {
  return (
    <div className="w-[85%] h-40 bg-gray-500 text-center">
      <p>{company}</p>
      <p>{position}</p>
      <p>{id}</p>
    </div>
  );
}
