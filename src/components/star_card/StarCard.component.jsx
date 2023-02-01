const Card = ({ item }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
      }}
    >
      Name : {item.name}
      <br />
      Distance : {item.distance}
      <br />
      Mass : {item.mass}
      <br />
    </div>
  );
};

export default Card;