import React from 'react';

export const ColorPalette: React.FC<{ randomColors: string[] }> = ({
  randomColors,
}) => (
  <div className="grid grid-cols-4 gap-10  place-items-center ">
    <Color hex_value={randomColors[0]} />
    <Color hex_value={randomColors[1]} />
    <Color hex_value={randomColors[2]} />
    <Color hex_value={randomColors[3]} />
    <Color hex_value={randomColors[4]} />
    <Color hex_value={randomColors[5]} />
    <Color hex_value={randomColors[6]} />
    <Color hex_value={randomColors[7]} />
    <Color hex_value={randomColors[8]} />
    <Color hex_value={randomColors[9]} />
    <Color hex_value={randomColors[10]} />
    <Color hex_value={randomColors[11]} />
    <Color hex_value={randomColors[12]} />
    <Color hex_value={randomColors[13]} />
    <Color hex_value={randomColors[14]} />
    <Color hex_value={randomColors[15]} />
  </div>
);

const Color: React.FC<{ hex_value: string }> = ({ hex_value }) => {
  const tailwind_bg = 'bg-[#' + hex_value + ']';
  console.log(tailwind_bg);
  return (
    <div className={'flex box-content w-48 h-48 ' + tailwind_bg}>
      <button className="grow text-3xl justify-center">{hex_value}</button>
    </div>
  );
};
