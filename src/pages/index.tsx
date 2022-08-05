import { trpc } from '@/utils/trpc';
import { Navbar } from '@/components';

import { useState } from 'react';

export default function Page() {
  const { data: colors } = trpc.useQuery(['get-color-palette'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      <Navbar float={'float-left'} />
      <Navbar float={'float-right'} />
      <div className="grid grid-flow-row">
        <div className="p-3"></div>
        <div className="text-4xl flex items-center justify-center">
          KARAPARETTO
        </div>
        <div className="p-5"></div>
        <div className="mx-16 grid grid-cols-4 gap-10  place-items-center ">
          {colors &&
            colors.map((val, key) => (
              <Color
                key={key}
                bg={val.color}
              />
            ))}
        </div>
        <div className="p-8"></div>
        <div className="flex items-center justify-center">
          <button className="text-2xl text-white bg-gray-500 px-6 py-3 rounded-lg">
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}

const Color: React.FC<{ bg: string }> = (props) => {
  const bg = props.bg.substring(4, 11);
  console.log(bg);
  return (
    <div
      className={'flex box-content w-48 h-48 font-bold'}
      style={{ backgroundColor: bg }}
    >
      <button className="grow text-black text-3xl justify-center">{bg}</button>
    </div>
  );
};
