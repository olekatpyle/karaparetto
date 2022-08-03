import React from 'react';

export default class Control extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <button className="text-2xl text-white bg-gray-500 px-6 py-3 rounded-lg">
          Shuffle
        </button>
      </div>
    );
  }
}
