import { trpc } from '@/utils/trpc';
import { Navbar } from '@/components';

import { useState } from 'react';

export default function Page() {
    const [palette, setPalette] = useState([]);

    const { refetch } = trpc.useQuery(['get-color-palette'], {
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        onSuccess: (data) => setPalette(data),
    });

    return (
        <div className="">
            <Navbar float={'float-left'} />
            <Navbar float={'float-right'} />
            <div className="grid grid-flow-row">
                <div className="p-3"></div>
                <div className="text-4xl flex items-center justify-center">
                    KARAPARETTO
                </div>
                <div className="p-5"></div>
                <div className="mx-28 grid grid-cols-4 gap-6  place-items-center ">
                    {palette &&
                        palette.map((val, key) => (
                            <Color
                                key={key}
                                bg={val.hex}
                            />
                        ))}
                </div>
                <div className="p-8"></div>
                <div className="flex items-center justify-center">
                    <button
                        className="text-2xl text-white bg-gray-500 px-6 py-3 rounded-lg"
                        onClick={() => refetch()}
                    >
                        Shuffle
                    </button>
                </div>
            </div>
        </div>
    );
}

const Color: React.FC<{
    bg: string;
}> = (props) => {
    console.log(props.bg);
    const hex_val = '#' + props.bg;
    return (
        <div
            className={'flex box-content w-48 h-48'}
            style={{ backgroundColor: hex_val }}
        >
            <button className="grow text-3xl text-transparent justify-center transition ease-in-out delay-25 hover:text-white">
                {props.bg}
            </button>
        </div>
    );
};
