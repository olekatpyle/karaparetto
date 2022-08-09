import { trpc } from '@/utils/trpc';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '@/redux/store';
import { Navbar } from './Navbar';
import { Dropbar } from './Dropbar';
import { ColorField } from './ColorField';

export function UIContext() {
  const [palette, setPalette] = useState([]);
  const theme = useSelector(selectTheme);

  const { refetch } = trpc.useQuery(['get-color-palette'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => setPalette(data),
  });

  return (
    <div
      className="relative"
      style={{ backgroundColor: '#' + theme.bg }}
    >
      <Navbar theme={theme} />
      <Dropbar />
      <div className="grid grid-flow-row h-full">
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
              <ColorField
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

export default UIContext;
