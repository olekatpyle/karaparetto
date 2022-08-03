import { trpc } from '@/util/trpc';

export default function Page() {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'Olek' }]);
  if (isLoading) return <div>Loading ...</div>;
  if (data) return <div>{data.greeting}</div>;

  return (
    <div className="">
      <nav className="w-1/4 h-screen sticky float-left"></nav>
      <nav className="w-1/4 h-screen sticky float-right"></nav>
      <div className="grid grid-flow-row">
        <div className="p-4"></div>
        <div className="text-4xl flex items-center justify-center">
          KARAPARETTO
        </div>
        <div className="p-4"></div>
        <div className="grid grid-cols-4 gap-10  place-items-center ">
          <div className="box-content w-48 h-48 bg-white">1</div>
          <div className="box-content w-48 h-48 bg-white">2</div>
          <div className="box-content w-48 h-48 bg-white">3</div>
          <div className="box-content w-48 h-48 bg-white">4</div>
          <div className="box-content w-48 h-48 bg-white">1</div>
          <div className="box-content w-48 h-48 bg-white">2</div>
          <div className="box-content w-48 h-48 bg-white">3</div>
          <div className="box-content w-48 h-48 bg-white">4</div>
          <div className="box-content w-48 h-48 bg-white">1</div>
          <div className="box-content w-48 h-48 bg-white">2</div>
          <div className="box-content w-48 h-48 bg-white">3</div>
          <div className="box-content w-48 h-48 bg-white">4</div>
          <div className="box-content w-48 h-48 bg-white">1</div>
          <div className="box-content w-48 h-48 bg-white">2</div>
          <div className="box-content w-48 h-48 bg-white">3</div>
          <div className="box-content w-48 h-48 bg-white">4</div>
        </div>
        <div className="p-8"></div>
        <div className="flex items-center justify-center">
          <button className="text-2xl">Shuffle</button>
        </div>
      </div>
    </div>
  );
}
