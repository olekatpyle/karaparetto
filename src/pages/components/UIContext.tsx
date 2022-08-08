import { trpc } from '@/utils/trpc';
import { useState } from 'react';
import { Color, Navbar, Dropbar, defaultTheme } from '.';

export default function UIContext() {
  const [palette, setPalette] = useState([]);
  const [theme, setTheme] = useState(defaultTheme);

  const { refetch } = trpc.useQuery(['get-color-palette'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => setPalette(data),
  });

  return (
    <div
      className=""
      style={{ backgroundColor: '#' + theme.bg }}
    >
      <Navbar theme={theme} />
      <Dropbar
        theme={theme}
        applyTheme={setTheme}
      />
      <div className="grid grid-flow-row">
        <div className="p-3"></div>
        <div
          className="text-4xl flex items-center justify-center"
          style={{ color: '#' + theme.primary }}
        >
          KARAPARETTO
        </div>
        <div className="p-5"></div>
        <div className="mx-28 grid grid-cols-4 gap-6  place-items-center ">
          {palette &&
            palette.map((val, key) => (
              <Color
                key={key}
                bg={val.hex}
              />
            ))}
        </div>
        <div className="p-8"></div>
        <div className="flex items-center justify-center">
          <button
            className="text-2xl text-white bg-gray-500 px-6 py-3 rounded-lg"
            onClick={() => refetch()}
          >
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}
