import React from 'react';

function Emoji({ className, label, symbol }) {
  return (
    <span className={className} role='img' aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>
  );
}

export default React.memo(Emoji);
