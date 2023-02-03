import axios from 'axios';
import React, { useState } from 'react';
import inputFields from '../../../ui_data/add_star.field-data';
import ms from './AddStarModel.module.css';

const AddStarModel = () => {
  const [data, setData] = useState({
    name: '',
    distance: '',
    mass: '',
    temperature: '',
    color: '',
    radius: '',
  });

  const handleChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/stars', data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={ms.model_body_input_fields}>
        <form className={ms.form} onChange={handleChanges}>
          {inputFields.map((field) => {
            return (
              <div key={field.label}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  className={ms.model_input_field}
                  type={field.type}
                  name={field.name}
                />
              </div>
            );
          })}
          <button className={ms.model_submit_btn} onClick={handleStarSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStarModel;
