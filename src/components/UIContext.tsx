import { trpc } from '@/utils/trpc';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, selectScale, selectAuto } from '@/redux/store';
// import { resetDefault } from '@/redux/reducer/themeSlice';
import {
  Menubar,
  Preview,
  Dropbar,
  ColorField,
  ControlPanel,
} from '@/components';

export function UIContext() {
  const [palette, setPalette] = useState([]);
  const theme = useSelector(selectTheme);
  const scale = useSelector(selectScale);
  const auto = useSelector(selectAuto);

  const { refetch } = trpc.useQuery(['get-color-palette'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => setPalette(data),
  });

  return (
    <div
      className="static h-screen"
      style={{ backgroundColor: '#' + theme.bg }}
    >
      <Menubar />
      <Preview />
      <Dropbar />
      <div className="pt-4"></div>
      <div
        className="m-auto text-5xl flex text-center justify-center"
        style={{ color: '#' + theme.primary }}
      >
        KARAPARETTO
      </div>
      <div className="pt-4 "></div>
      <div className="grid grid-flow-row">
        <div
          className="mx-auto grid gap-2  place-items-center h-max"
          style={{
            gridTemplateColumns: auto,
          }}
        >
          {palette &&
            palette.slice(0, +scale).map((val, key) => (
              <ColorField
                key={key}
                bg={val.hex}
                scale={scale}
                border={val.hex}
              />
            ))}
        </div>
      </div>
      <ControlPanel refetch={refetch} />
    </div>
  );
}

export default UIContext;
