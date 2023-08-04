import React from 'react';
import './Section.css';

type Props = {
    children: React.ReactElement;
}

function Section({children}: Props) {
  return (
    <section className='section'>{children}</section>
  )
}

export default Section;