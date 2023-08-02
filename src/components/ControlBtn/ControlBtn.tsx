import React from 'react';
import './ControlBtn.css';


type Props = {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    // onClick: (event: React.MouseEvent) => void;
    btnClass: string;
}

function ControlBtn({children, onClick, btnClass}: Props) {
  return (
    <button className={`control-btn ${btnClass}`} onClick={onClick}>{children}</button>
  )
}

export default ControlBtn;