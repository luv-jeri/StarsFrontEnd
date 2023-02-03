// Custom css import
import ms from "./StarCard.module.css";

// CUSTOM materials import
import rightArrowIcon from "../../materials/icons/right-arrow.png";

// import custom materials/Icons
import editIcon from "../../materials/icons/edit-icon.png";
import deleteIcon from "../../materials/icons/delete-icon.png";

const Card = ({ item }) => {
  return (
    <>
      <div className={ms.starCard_container}>
        <div className={ms.star_name}> {item.name}</div>
        <hr className={ms.horizontal_line} />
        <div className={ms.star_details}>
          <p>Distance : {item.distance}</p>
          <p>Mass : {item.mass}</p>
          <p>temperature : {item.temperature}</p>
          <p>color: {item.color}</p>
          <p>radius:{item.radius}</p>
        </div>
        <div className={ms.view_more_button}>
          <h2>View Details</h2>
          <img src={rightArrowIcon} alt="" />
        </div>
        <div className={ms.edit_delete_button}>
          <img src={editIcon} alt="edit" />
          <img src={deleteIcon} alt="delete" />
        </div>
      </div>
    </>
  );
};

export default Card;
