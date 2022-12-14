import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTheme,
  selectDefaultTheme,
  selectDropFieldBgs,
} from '@/redux/store';
import { applyColor, setDropFieldBg } from '@/redux/reducer/uiSlice';

export const Dropbar: React.FC<{}> = () => {
  return (
    <div className={`w-1/4 sticky float-right`}>
      <div className="p-6"></div>
      <div className="grid grid-cols-2 gap-2 place-items-center mx-16">
        <DropColor id={'primary'} />
        <DropLabel label={'PRIMARY COLOR'} />
        <DropColor id={'secondary'} />
        <DropLabel label={'SECONDARY COLOR'} />
        <DropColor id={'bg'} />
        <DropLabel label={'BACKGROUND COLOR'} />
        <DropColor id={'accent1'} />
        <DropLabel label={'ACCENT COLOR#1'} />
        <DropColor id={'accent2'} />
        <DropLabel label={'ACCENT COLOR #2'} />
      </div>
    </div>
  );
};

export const DropColor: React.FC<{
  id: string;
}> = (props) => {
  const defaultTheme = useSelector(selectDefaultTheme);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const dropFields = useSelector(selectDropFieldBgs);
  const [colorDropped, setColorDropped] = useState(false);

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    let c = event.dataTransfer.getData('color');
    setColorDropped(true);
    dispatch(setDropFieldBg({ key: props.id, color: c }));
    dispatch(applyColor({ key: props.id, color: c }));
  };

  const onClickRemoveColor = (event) => {
    setColorDropped(false);
    dispatch(setDropFieldBg({ key: props.id, color: 'e8e8e8' }));
    dispatch(applyColor({ key: props.id, color: defaultTheme[props.id] }));
  };

  return (
    <div className="relative group">
      <div
        className="flex box-content items-center rounded-lg w-36 h-36 border border-white text-2xl text-transparent justify-center transition ease-in-out delay-25 hover:text-white"
        style={{ backgroundColor: '#' + dropFields[props.id] }}
        onDragOver={(event) => onDragOver(event)}
        onDrop={(event) => onDrop(event)}
      >
        {dropFields[props.id] !== defaultTheme['default'] &&
          dropFields[props.id]}
      </div>
      <div className="">
        {colorDropped && (
          <button
            className="bg-white absolute -right-2 -top-2 p-1 w-10 h-10 text-center border rounded-full hidden transition-all ease-in-out delay-500 group-hover:block"
            onClick={(event) => onClickRemoveColor(event)}
            style={{
              color: '#' + theme.accent1,
              borderColor: '#' + theme.accent2,
            }}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export const DropLabel: React.FC<{ label: string }> = (props) => {
  const theme = useSelector(selectTheme);
  return (
    <div
      className="flex items-center  w-44 h-44"
      style={{ color: '#' + theme.primary }}
    >
      {props.label}
    </div>
  );
};

export default Dropbar;
