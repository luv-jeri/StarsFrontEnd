import ms from './StarCard.module.css';

const Card = ({ item, onClick}) => {
  return (
    <>
      <div
        className={ms.starCard_container}
        style={{
          display: item.name ? 'flex' : 'none',
        }}
        onClick={onClick}
      >
        <div className={ms.star_name}> {item.name}</div>
      </div>
    </>
  );
};

export default Card;
