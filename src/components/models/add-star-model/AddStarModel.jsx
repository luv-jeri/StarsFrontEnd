import axios from "axios";
import React, { useState } from "react";

// Custom CSS Import
import ms from "./AddStarModel.module.css";

const AddStarModel = ({ setIsAddStarModelOpen }) => {
  const [starName, setStarName] = useState("");
  const [distance, setDistance] = useState("");
  const [mass, setMass] = useState("");
  const [temperature, setTemperature] = useState("");
  const [color, setColor] = useState("");
  const [radius, setRadius] = useState("");

  const handleStarSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/stars", {
        starName,
        distance,
        mass,
        temperature,
        color,
        radius,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <div className={ms.model_main_parent}></div> */}
      <div
        className={ms.fake_space}
        onClick={() => {
          setIsAddStarModelOpen(false);
        }}
      ></div>
      <div className={ms.model_container}>
        <p
          onClick={() => {
            setIsAddStarModelOpen(false);
          }}
          className={ms.closing_button}
        >
          X
        </p>
        <div className={ms.model_heading}>
          <h2>Add Star here !</h2>
        </div>

        <div className={ms.model_body_input_fields}>
          <form>
            <label htmlFor="name">Name</label>
            <input
              className={ms.model_input_field}
              type="text"
              name="name"
              value={starName}
              onChange={(e) => {
                setStarName(e.target.value);
              }}
            />
            <label htmlFor="distance">Distance</label>
            <input
              className={ms.model_input_field}
              type="number"
              name="distance"
              value={distance}
              onChange={(e) => {
                setDistance(e.target.value);
              }}
            />
            <label htmlFor="mass">Mass</label>
            <input
              className={ms.model_input_field}
              type="text"
              name="mass"
              value={mass}
              onChange={(e) => {
                setMass(e.target.value);
              }}
            />
            <label htmlFor="temperature">Temperature</label>
            <input
              className={ms.model_input_field}
              type="number"
              name="temperature"
              value={temperature}
              onChange={(e) => {
                setTemperature(e.target.value);
              }}
            />
            <label htmlFor="color">Color</label>
            <input
              className={ms.model_input_field}
              type="text"
              name="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <label htmlFor="radius">Radius</label>
            <input
              className={ms.model_input_field}
              type="number"
              name="radius"
              value={radius}
              onChange={(e) => {
                setRadius(e.target.value);
              }}
            />
          </form>
          <button className={ms.submit_button} onClick={handleStarSubmit}>
            Create Star
          </button>
          <button
            className={ms.cancel_button}
            onClick={() => {
              setIsAddStarModelOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddStarModel;
