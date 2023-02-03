import React, { useState, useEffect } from 'react';
import List from '../../../components/list/List.component';
import StarCard from '../../../components/star_card/StarCard.component';
import axios from 'axios';
import Modal from '../../../components/modal/Modal.component';
import UpdateStarModel from '../../../components/models/update_star_model/UpdateStarModel';
// Custom CSS import
import ms from './Home.module.css';

// Custom materials/images import
import searchIcon from '../../../materials/icons/search.png';
import AddStarModel from '../../../components/models/add-star-model/AddStarModel';

function Home() {
  const [stars, setStars] = useState([]);
  const [isAddStarModelOpen, setIsAddStarModelOpen] = useState(false);
  const [isUpdateStarModelOpen, setIsUpdateStarModelOpen] = useState(false);
  const [selectedStar, setSelectedStar] = useState({});

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
      <Modal
        isOpen={isAddStarModelOpen}
        onClose={() => {
          setIsAddStarModelOpen(false);
        }}
        render={() => {
          return <AddStarModel />;
        }}
        title='Add Star'
      />
      <Modal
        isOpen={isUpdateStarModelOpen}
        onClose={() => {
          setIsUpdateStarModelOpen(false);
        }}
        render={() => {
          return <UpdateStarModel starData={selectedStar} />;
        }}
        title='Update Star'
      />
      <div className={ms.home_main_container}>
        <div className={ms.search_section}>
          <input className={ms.search_box} type='text' placeholder='Search...' />
          <img className={ms.search_icon} src={searchIcon} alt='search' />
        </div>

        <div className={ms.page_container}>
          <section className={ms.section_heading}>
            <h1>Our Stars Details</h1>
          </section>
          <div className={ms.star_details_container}>
            <List
              onClick={(e) => {
                const selectedStar = stars.find(
                  (star) => star.name === e.target.innerText
                );
                setSelectedStar(selectedStar);
                setIsUpdateStarModelOpen(true);
              }}
              itemsArray={stars}
              ToUse={StarCard}
            />
          </div>
        </div>
      </div>
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
