import React from 'react';
import s from './Modal.module.css';

function ModalComponent({ render, title, onClose, isOpen }) {
  return (
    <div
      className={s.modal}
      style={{
        display: isOpen ? 'block' : 'none',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <h1 className={s['modal-title']}>{title}</h1>
      {/* <button className={s['modal-close']} onClick={onClose}>
        X
      </button> */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={s['modal-content']}
      >
        {render()}
      </div>
    </div>
  );
}

export default ModalComponent;
