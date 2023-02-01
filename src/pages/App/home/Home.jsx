import React, { useState, useEffect } from 'react';
import List from '../../../components/list/List.component';
import StarCard from '../../../components/star_card/StarCard.component';
import axios from 'axios';

function Home() {
  const [stars, setStars] = useState([]);

  const fetchStars = async () => {
    try {
      const { data } = await axios.get("stars");
      setStars(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStars();
  }, []);

  return (
    <div>
      <div> Search Bar</div>
      <List itemsArray={stars} ToUse={StarCard} />
    </div>
  );
}

export default Home;
