import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div>
      <img className={css.img} src={avatar} alt={`Avatar ${name}`} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;