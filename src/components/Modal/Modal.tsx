import React from 'react';
import './Modal.css';

type Props = {
    children: React.ReactNode;
    onClose: ()=>void;
}

function Modal({children, onClose}: Props) {
  return (
    <div className='backdrop-note' onClick={onClose}>
        <div className='modal-note' onClick={(event) => event.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal;