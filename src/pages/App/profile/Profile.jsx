import React from 'react';
import List from '../../../components/list/List.component';

const ProfileCard = ({ item }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'lightblue',
      }}
    >
      Name : {item.name}
      <br />
      Height : {item.height}
      <br />
      Mass : {item.mass}
      <br />
      Hair Color : {item.hair_color}
      <br />
    </div>
  );
}

function Profile() {
  const list = [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
    },
  ];
  
  return (
    <div>
      <h1>Profile</h1>
      <List itemsArray={list} ToUse={ProfileCard} />
    </div>
  );
}

export default Profile;
