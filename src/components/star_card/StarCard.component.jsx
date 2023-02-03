// Custom css import
import ms from './StarCard.module.css';

const Card = ({ item }) => {
  return (
    <>
      <div
        className={ms.starCard_container}
        style={{
          display: item.name ? 'flex' : 'none',
        }}
      >
        <div className={ms.star_name}> {item.name}</div>
      </div>
    </>
  );
};

export default Card;
