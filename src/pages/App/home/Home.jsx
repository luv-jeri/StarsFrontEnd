import React, { useState, useEffect } from "react";
import List from "../../../components/list/List.component";
import StarCard from "../../../components/star_card/StarCard.component";
import axios from "axios";

// Custom CSS import
import ms from "./Home.module.css";

// Custom materials/images import
import searchIcon from "../../../materials/icons/search.png";

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
    <div className={ms.home_main_container}>
      <div className={ms.search_section}>
        <input className={ms.search_box} type="text" placeholder="Search..." />
        <img className={ms.search_icon} src={searchIcon} alt="search" />
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
