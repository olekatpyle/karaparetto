import React from 'react';
import { Palette } from '@/components';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/redux/store';

export default function Menubar() {
  const theme = useSelector(selectTheme);
  return (
    <div
      className="flex flex-row h-12 w-full place-content-center"
      style={{ backgroundColor: '#' + theme.secondary }}
    >
      <div className="w-1/3 my-auto">
        <Palette
          theme={theme}
          padding={'auto'}
          displayHex={true}
        />
      </div>
      <div className="fixed flex gap-2 right-0 mx-4">
        <a
          className="grow text-2xl"
          href="#"
          style={{ color: '#' + theme.primary }}
        >
          about
        </a>
        <a
          className="grow text-2xl"
          href="#"
          style={{ color: '#' + theme.primary }}
        >
          github
        </a>
        <a
          className="grow text-2xl"
          href="#"
          style={{ color: '#' + theme.primary }}
        >
          about
        </a>
      </div>
    </div>
  );
}
