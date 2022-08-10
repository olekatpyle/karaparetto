import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/redux/store';
import Palette from './Palette';

export const Preview: React.FC<{}> = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className="w-1/4 grid grid-column-1 gap-8 sticky float-left">
      <div className="p-6"></div>
      <div className="mx-8">
        <span>PALETTE#1</span>
        <button>
          <Palette
            theme={theme}
            padding={76}
            displayHex={false}
          />
        </button>
      </div>
      <div className="mx-8">
        <span>PALETTE#2</span>
        <button>
          <Palette
            theme={theme}
            padding={76}
            displayHex={false}
          />
        </button>
      </div>
      <div className="mx-8">
        <span>PALETTE#3</span>
        <button>
          <Palette
            theme={theme}
            padding={76}
            displayHex={false}
          />
        </button>
      </div>
      <div className="mx-8">
        <span>PALETTE#4</span>
        <button>
          <Palette
            theme={theme}
            padding={76}
            displayHex={false}
          />
        </button>
      </div>
      <div className="mx-8">
        <span>PALETTE#5</span>
        <button>
          <Palette
            theme={theme}
            padding={76}
            displayHex={false}
          />
        </button>
      </div>
    </div>
  );
};

export default Preview;
