import React from 'react';

export default function Palette(props) {
  return (
    <div className="grid grid-cols-5 gap-0">
      <Color
        color={props.theme.primary}
        padding={props.padding}
        displayHex={props.displayHex}
      />
      <Color
        color={props.theme.secondary}
        padding={props.padding}
        displayHex={props.displayHex}
      />
      <Color
        color={props.theme.bg}
        padding={props.padding}
        displayHex={props.displayHex}
      />
      <Color
        color={props.theme.accent1}
        padding={props.padding}
        displayHex={props.displayHex}
      />
      <Color
        color={props.theme.accent2}
        padding={props.padding}
        displayHex={props.displayHex}
      />
    </div>
  );
}

export function Color(props) {
  // const style =
  //   props.displayHex === true
  //     ?
  //     : '';
  return (
    <div className={'flex grow box-content '}>
      <div
        className={'grow text-2xl text-transparent justify-center'}
        style={{
          backgroundColor: '#' + props.color,
          paddingTop: props.padding,
          paddingLeft: props.padding,
          width: props.padding,
          height: props.padding,
        }}
      >
        #
      </div>
    </div>
  );
}
