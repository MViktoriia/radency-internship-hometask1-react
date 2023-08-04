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
            <div className='button-wrapper'>
                <button onClick={onClose} className="button-close">
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            {children}
        </div>
    </div>
  )
}

export default Modal;