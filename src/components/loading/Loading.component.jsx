import React from 'react';
import s from './Loading.module.css';

function Loading() {
  return (
    <div className={s.container}>
      <div className={s.loader}></div>
    </div>
  );
}

export default Loading;
