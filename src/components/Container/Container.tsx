import React from 'react';
import './Container.css';

type Props = {
    children: React.ReactNode;
}

function Container({children}: Props) {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container;