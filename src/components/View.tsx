import React from 'react';
import { ColorPalette } from './ColorPalette';
import Control from './Control';

const randomColors: string[] = [
  '264653',
  '2a9d8f',
  'e9c46a',
  'f4a261',
  'e76f51',
  '264653',
  '2a9d8f',
  'e9c46a',
  'f4a261',
  'e76f51',
  '264653',
  '2a9d8f',
  'e9c46a',
  'f4a261',
  'e76f51',
  '264653',
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
