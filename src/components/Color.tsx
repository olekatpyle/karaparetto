export const Color: React.FC<{
    bg: string;
}> = (props) => {
    const onDragStart = (event: React.DragEvent, color: string) => {
        console.log('dragstart on color: ', color);

        event.dataTransfer.setData('color', color);
    };

    return (
        <div
            className={'flex box-content rounded-lg w-48 h-48 '}
            onDragStart={(event) => onDragStart(event, props.bg)}
        >
            <div
                className="rounded-lg flex items-center border border-white grow text-3xl text-transparent justify-center transition ease-in-out delay-25 hover:text-white"
                style={{ backgroundColor: '#' + props.bg }}
                draggable
            >
                {props.bg}
            </div>
        </div>
    );
};

export default Color;
