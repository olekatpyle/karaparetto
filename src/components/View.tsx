import React from 'react';
import { ColorPalette } from './ColorPalette';
import Control from './Control';

const randomColors: string[] = [
    'bg-[#264653]',
    'bg-[#2a9d8f]',
    'bg-[#e9c46a]',
    'bg-[#f4a261]',
    'bg-[#e76f51]',
    'bg-[#264653]',
    'bg-[#2a9d8f]',
    'bg-[#e9c46a]',
    'bg-[#f4a261]',
    'bg-[#e76f51]',
    'bg-[#264653]',
    'bg-[#2a9d8f]',
    'bg-[#e9c46a]',
    'bg-[#f4a261]',
    'bg-[#e76f51]',
    'bg-[#264653]',
];

const Hero = () => (
    <div className="text-4xl flex items-center justify-center">KARAPARETTO</div>
);

export default class View extends React.Component {
    render() {
        return (
            <div className="grid grid-flow-row">
                <div className="p-4"></div>
                <Hero />
                <div className="p-4"></div>
                <ColorPalette randomColors={randomColors} />
                <div className="p-8"></div>
                <Control />
            </div>
        );
    }
}
