import React from 'react';

export const ColorPalette: React.FC<{ randomColors: string[] }> = ({
    randomColors,
}) => (
    <div className="grid grid-cols-4 gap-10  place-items-center ">
        <Color bg={randomColors[0]} />
        <Color bg={randomColors[1]} />
        <Color bg={randomColors[2]} />
        <Color bg={randomColors[3]} />
        <Color bg={randomColors[4]} />
        <Color bg={randomColors[5]} />
        <Color bg={randomColors[6]} />
        <Color bg={randomColors[7]} />
        <Color bg={randomColors[8]} />
        <Color bg={randomColors[9]} />
        <Color bg={randomColors[10]} />
        <Color bg={randomColors[11]} />
        <Color bg={randomColors[12]} />
        <Color bg={randomColors[13]} />
        <Color bg={randomColors[14]} />
        <Color bg={randomColors[15]} />
    </div>
);

const Color: React.FC<{ bg: string }> = ({ bg }) => {
    return (
        <div className={`flex box-content w-48 h-48 font-bold ${bg}`}>
            <button className="grow text-3xl justify-center">
                {bg.substring(5, 10)}
            </button>
        </div>
    );
};
