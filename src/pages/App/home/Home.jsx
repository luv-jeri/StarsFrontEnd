import React, { useState, useEffect } from 'react';
import List from '../../../components/list/List.component';
import StarCard from '../../../components/star_card/StarCard.component';
import axios from 'axios';
import Modal from '../../../components/modal/Modal.component';
// Custom CSS import
import ms from './Home.module.css';

// Custom materials/images import
import searchIcon from '../../../materials/icons/search.png';

const AddStar = () => {
  const [name, setName] = useState('');
  const [temperature, setTemperature] = useState('');
  const [distance, setDistance] = useState('');
  const [mass, setMass] = useState('');
  const [radius, setRadius] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('stars', {
        name,
        temperature,
        distance,
        mass,
        radius,
        color,
      });
      console.log(data);
      setName('');
      setTemperature('');
      setDistance('');
      setMass('');
      setRadius('');
      setColor('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor='temperature'>Temperature</label>
        <input
          value={temperature}
          type='text'
          name='temperature'
          id='temperature'
          onChange={(e) => {
            setTemperature(e.target.value);
          }}
        />
        <label htmlFor='distance'>Distance</label>
        <input
          type='text'
          name='distance'
          id='distance'
          value={distance}
          onChange={(e) => {
            setDistance(e.target.value);
          }}
        />
        <label htmlFor='mass'>Mass</label>
        <input
          type='text'
          name='mass'
          value={mass}
          id='mass'
          onChange={(e) => {
            setMass(e.target.value);
          }}
        />
        <label htmlFor='radius'>Radius</label>
        <input
          type='text'
          name='radius'
          value={radius}
          id='radius'
          onChange={(e) => {
            setRadius(e.target.value);
          }}
        />
        <label htmlFor='color'>color</label>
        <input
          value={color}
          type='text'
          name='color'
          id='color'
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Add New Star</button>
      </form>
    </div>
  );
};

function Home() {
  const [stars, setStars] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

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
    <div className={ms.home_main_container}>
      {modal && (
        <Modal
          onClick={handleModal}
          title='Add new star'
          render={() => {
            return <AddStar />;
          }}
        />
      )}

      <button className={ms.floating_button} onClick={handleModal}>
        {' '}
        ➕{' '}
      </button>
      <div className={ms.search_section}>
        <input className={ms.search_box} type='text' placeholder='Search...' />
        <img className={ms.search_icon} src={searchIcon} alt='search' />
      </div>

      <div className={ms.page_container}>
        <section className={ms.section_heading}>
          <h1>Our Stars Details</h1>
        </section>
        <div className={ms.star_details_container}>
          <List itemsArray={stars} ToUse={StarCard} />
        </div>
      </div>
    </div>
  );
}

export default Home;
