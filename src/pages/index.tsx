import { useState } from 'react';
import { UIContext } from '@/pages/components';

export default function Page() {
  return <UIContext />;
}

const Color: React.FC<{
  bg: string;
}> = (props) => {
  const [color, setColor] = useState(props.bg);
  const [picked, setPicked] = useState(false);

  console.log(color);

  const onDragStart = (event: React.DragEvent, color: string) => {
    console.log('dragstart on color: ', color);

    event.dataTransfer.setData('color', color);
  };

  const onDragEnd = (event) => {
    setColor('ffffff');
    setPicked(true);
  };

  const current = picked === false ? props.bg : color;
  const hex_val = '#' + current;

  return (
    <div
      className={'flex box-content rounded-lg w-48 h-48 '}
      onDragStart={(event) => onDragStart(event, current)}
      onDragEnd={(event) => onDragEnd(event)}
    >
      <div
        className="rounded-lg flex items-center grow text-3xl text-transparent justify-center transition ease-in-out delay-25 hover:text-white"
        style={{ backgroundColor: hex_val }}
        draggable
      >
        {props.bg}
      </div>
    </div>
  );
};
