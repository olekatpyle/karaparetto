import React, { useState } from 'react';
import { defaultTheme } from './UIContext';

export const Dropbar: React.FC<{ theme: Theme; applyTheme }> = (props) => {
  const [primary, setPrimary] = useState(props.theme.primary);
  const [secondary, setSecondary] = useState(props.theme.secondary);
  const [bg, setBg] = useState(props.theme.bg);
  const [accent1, setAccent1] = useState(props.theme.accent1);
  const [accent2, setAccent2] = useState(props.theme.accent2);

  const applyTheme = (theme: Theme) => {
    props.applyTheme(theme);
  };

  return (
    <div className={`w-1/4 h-screen sticky float-right border-l border-black `}>
      <div className="p-9"></div>
      <div className="grid grid-cols-2 gap-2 place-items-center mx-16">
        <DropColor
          theme={props.theme}
          setter={setPrimary}
          id={'primary'}
          applyTheme={applyTheme}
        />
        <DropLabel
          label={'PRIMARY COLOR'}
          theme={props.theme}
        />
        <DropColor
          theme={props.theme}
          setter={setSecondary}
          id={'secondary'}
          applyTheme={applyTheme}
        />
        <DropLabel
          label={'SECONDARY COLOR'}
          theme={props.theme}
        />
        <DropColor
          theme={props.theme}
          setter={setBg}
          id={'bg'}
          applyTheme={applyTheme}
        />
        <DropLabel
          label={'BACKGROUND COLOR'}
          theme={props.theme}
        />
        <DropColor
          theme={props.theme}
          setter={setAccent1}
          id={'accent1'}
          applyTheme={applyTheme}
        />
        <DropLabel
          label={'ACCENT COLOR#1'}
          theme={props.theme}
        />
        <DropColor
          theme={props.theme}
          setter={setAccent2}
          id={'accent2'}
          applyTheme={applyTheme}
        />
        <DropLabel
          label={'ACCENT COLOR #2'}
          theme={props.theme}
        />
        <div className="p-8"></div>
        <div className="flex items-center justify-center">
          <button
            className="text-2xl text-white bg-gray-500 px-6 py-3 rounded-lg"
            onClick={() =>
              props.applyTheme({
                primary: primary,
                secondary: secondary,
                bg: bg,
                accent1: accent1,
                accent2: accent2,
              })
            }
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export const DropColor: React.FC<{
  theme: Theme;
  setter;
  id: string;
  applyTheme;
}> = (props) => {
  const [color, setColor] = useState(props.theme.default);
  const [colorDropped, setColorDropped] = useState(false);
  const [initialTheme, setAlteredTheme] = useState(props.theme);

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    let c = event.dataTransfer.getData('color');
    // preserve the initial state
    if (color === defaultTheme['default']) setAlteredTheme(props.theme);
    setColor(c);
    setColorDropped(true);
    props.setter(c);
  };

  const onClickRemoveColor = (event) => {
    setColorDropped(false);
    setColor('e8e8e8');
    props.setter(defaultTheme[props.id]);
    props.applyTheme(initialTheme);
  };

  return (
    <div className="relative group">
      <div
        className="flex box-content items-center rounded-lg w-36 h-36 border border-white text-2xl text-transparent justify-center transition ease-in-out delay-25 hover:text-white"
        style={{ backgroundColor: '#' + color }}
        onDragOver={(event) => onDragOver(event)}
        onDrop={(event) => onDrop(event)}
      >
        {color !== defaultTheme['default'] && color}
      </div>
      <div className="">
        {colorDropped && (
          <button
            className="absolute -right-2 -top-2 p-1 w-10 h-10 border rounded-full hidden transition-all ease-in-out delay-500 group-hover:block"
            onClick={(event) => onClickRemoveColor(event)}
            style={{
              backgroundColor: '#' + props.theme.bg,
              borderColor: '#' + props.theme.primary,
              color: '#' + props.theme.accent1,
            }}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export const DropLabel: React.FC<{ label: string; theme: Theme }> = (props) => {
  return (
    <div
      className="flex items-center  w-44 h-44"
      style={{ color: '#' + props.theme.primary }}
    >
      {props.label}
    </div>
  );
};

export default Dropbar;
