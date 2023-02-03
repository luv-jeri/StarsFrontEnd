import React, { useState, useEffect } from 'react';
import List from '../../../components/list/List.component';
import StarCard from '../../../components/star_card/StarCard.component';
import axios from 'axios';
import Modal from '../../../components/modal/Modal.component';
// Custom CSS import
import ms from './Home.module.css';

// Custom materials/images import
import searchIcon from "../../../materials/icons/search.png";
import AddStarModel from "../../../components/models/add-star-model/AddStarModel";

function Home() {
  const [stars, setStars] = useState([]);
  const [isAddStarModelOpen, setIsAddStarModelOpen] = useState(false);

  const fetchStars = async () => {
    try {
      const { data } = await axios.get('stars');
      setStars(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStars();
  }, []);

  return (
    <>
      <div className={ms.home_main_container}>
        <div className={ms.search_section}>
          <input
            className={ms.search_box}
            type="text"
            placeholder="Search..."
          />
          <img className={ms.search_icon} src={searchIcon} alt="search" />
        </div>

        <div className={ms.page_container}>
          <section className={ms.section_heading}>
            <h1>Our Stars Details</h1>
          </section>
          <div  className={ms.star_details_container}>
            <List itemsArray={stars} ToUse={StarCard} />
          </div>
        </div>
      </div>
      {isAddStarModelOpen && (
        <AddStarModel setIsAddStarModelOpen={setIsAddStarModelOpen} />
      )}
      <button
        className={ms.add_star_button}
        onClick={() => {
          setIsAddStarModelOpen(true);
        }}
      >
       +
      </button>
    </>
  );
}

export default Home;
