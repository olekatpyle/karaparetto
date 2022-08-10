export const ColorField: React.FC<{
  bg: string;
  scale: string;
  border: string;
}> = (props) => {
  const onDragStart = (event: React.DragEvent, color: string) => {
    event.dataTransfer.setData('color', color);
  };

  const determineWidth = () => {
    if (props.scale === '16') return 176;
    else if (props.scale === '36') return 113;
    else return 90;
  };

  const width = determineWidth();

  return (
    <div
      className={'flex box-content rounded-lg border'}
      style={{ width: width, height: width, borderColor: '#' + props.border }}
      onDragStart={(event) => onDragStart(event, props.bg)}
    >
      <div
        className="rounded-lg flex items-center grow text-3xl text-transparent justify-center transition ease-in-out delay-25 hover:text-white"
        style={{ backgroundColor: '#' + props.bg }}
        draggable
      >
        {props.bg}
      </div>
    </div>
  );
};

export default ColorField;
