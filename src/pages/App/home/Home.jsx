import React, { useState, useEffect } from 'react';
import StarCard from '../../../components/star_card/StarCard.component';
import axios from 'axios';
import Modal from '../../../components/modal/Modal.component';
import Form from '../../../components/form/Form.component';
import inputFields from '../../../ui_data/add_star.field-data';
import useAuth from '../../../context/Auth.context';
// Custom CSS import
import ms from './Home.module.css';
// Custom materials/images import
import searchIcon from '../../../materials/icons/search.png';

function Home() {
  const [stars, setStars] = useState([]);
  const [isAddStarModelOpen, setIsAddStarModelOpen] = useState(false);
  const [isUpdateStarModelOpen, setIsUpdateStarModelOpen] = useState(false);
  const [selectedStar, setSelectedStar] = useState({});
  const { user, logout } = useAuth();

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
          return (
            <Form
              ui_data={inputFields}
              onSubmit={async (data) => {
                await axios.post('/stars', data);
              }}
            />
          );
        }}
        title='Add Star'
      />
      <Modal
        isOpen={isUpdateStarModelOpen}
        onClose={() => {
          setIsUpdateStarModelOpen(false);
        }}
        render={() => {
          return (
            <Form
              ui_data={inputFields}
              intiData={selectedStar}
              onSubmit={async (data) => {
                await axios.patch(`/stars?id=${data._id}`, data);
              }}
            />
          );
        }}
        title='Update Star'
      />
      <div className={ms.home_main_container}>
        <h2 onClick={logout}>Logout</h2>
        <div className={ms.search_section}>
          <input className={ms.search_box} type='text' placeholder={`hey ${user.name}`} />
          <img className={ms.search_icon} src={searchIcon} alt='search' />
        </div>
        <div className={ms.page_container}>
          <section className={ms.section_heading}>
            <h1>Our Stars Details</h1>
          </section>
          <div className={ms.star_details_container}>
            <div className={ms.list}>
              {stars.map((star, index) => {
                return (
                  <StarCard
                    key={star.name}
                    item={star}
                    onClick={() => {
                      setIsUpdateStarModelOpen(true);
                      setSelectedStar(star);
                    }}
                  />
                );
              })}
            </div>
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
