import { ColorField } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { selectScale } from '@/redux/store';
import { setScale, resetTheme } from '@/redux/reducer/uiSlice';

export default function ControlPanel(props) {
  const scale = useSelector(selectScale);
  const dispatch = useDispatch();

  return (
    <div className="absolute left-0 bottom-0 p-2 w-full flex items-center justify-center">
      <ColorField
        key={'white'}
        bg={'ffffff'}
        scale={'64'}
        border={'000000'}
      />
      <div className="p-10"></div>
      <form className="flex gap-1 items-center justify-center">
        <input
          type="radio"
          value="16"
          checked={scale === '16'}
          onChange={(event) => dispatch(setScale(event.target.value))}
        />
        <label>16</label>
        <input
          type="radio"
          value="36"
          checked={scale === '36'}
          onChange={(event) => dispatch(setScale(event.target.value))}
        />
        <label>36</label>
        <input
          type="radio"
          value="64"
          checked={scale === '64'}
          onChange={(event) => dispatch(setScale(event.target.value))}
        />
        <label>64</label>
      </form>
      <div className="p-10"></div>
      <button
        className="text-2xl text-white bg-gray-500 px-6 py-3 rounded-lg"
        onClick={() => props.refetch()}
      >
        SHUFFLE
      </button>
      <div className="p-10"></div>
      <ColorField
        key={'black'}
        bg={'000000'}
        scale={'64'}
        border={'000000'}
      />
      <div className="fixed right-0 mr-8">
        <button
          className="text-2xl text-white bg-red-400 px-6 py-3 rounded-lg"
          onClick={() => {
            dispatch(resetTheme());
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
