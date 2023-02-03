import React, { useState } from 'react';
import s from './Modal.module.css';

function ModalComponent({ render, title, onClick }) {
  return (
    <div className={s.modal}>
      <h1 className={s['modal-title']}>{title}</h1>
      <button className={s['modal-close']} onClick={onClick}>
        X
      </button>
      <div className={s['modal-content']}>{render()}</div>
    </div>
  );
}

export default ModalComponent;
