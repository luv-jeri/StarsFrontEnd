import { useState, useEffect } from 'react';
import s from './Form.module.css';

const Form = ({ ui_data, intiData, title, onSubmit  }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    intiData && setData(intiData);
  }, [intiData]);

  const handleChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarSubmit = async (e) => {
    e.preventDefault();
    try {
      onSubmit && onSubmit(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s.wrapper}>
      {title && (
        <div className={s.header}>
          <h1>{title}</h1>
        </div>
      )}
      <div className={s.fields}>
        {ui_data.map((field) => {
          return (
            <div key={field.label}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                className={s.input}
                type={field.type}
                name={field.name}
                value={data[field.name] || ''}
                onChange={handleChanges}
              />
            </div>
          );
        })}
      </div>
      <div className={s.buttons}>
        <button className={s.submit} onClick={handleStarSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
