import React from 'worker-react';


export default function({ active, children, onClick }) {
  return (<button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>);
}
