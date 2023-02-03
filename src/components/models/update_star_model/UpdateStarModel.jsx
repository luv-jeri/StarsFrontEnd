import axios from 'axios';
import React, { useState, useEffect } from 'react';
import inputFields from '../../../ui_data/add_star.field-data';
import ms from './UpdateStarModel.module.css';

const UpdateStarModel = ({ starData }) => {
  const [data, setData] = useState(starData);

  useEffect(() => {
    setData(starData);
  }, [starData]);

  const handleChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`/stars?id=${starData._id}`, data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleStarDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`/stars?id=${starData._id}`);
      console.log(res);
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
                  value={data[field.name]}
                />
              </div>
            );
          })}
          <button className={ms.model_submit_btn} onClick={handleStarSubmit}>
            Submit
          </button>
          <button className={ms.model_submit_btn} onClick={handleStarDelete}>
            Delete
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateStarModel;
