import css from "./Contact.module.css";
import { FaBeer } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export const Contact = ({ name, phone, onDelete, id }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{name}</h2>
      <div className={css.callBox}>
        <IoIosCall className={css.telIcon} />
        <a href={`tel:${phone.split("-").join("")}`} className={css.link}>
          {phone}
        </a>
      </div>

      <button className={css.addButton} onClick={() => onDelete(id)}>
        <FaBeer />
      </button>
    </div>
  );
}