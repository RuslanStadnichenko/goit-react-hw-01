import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.wrapper}>
      <div>
        <img className={css.avatar} src={image} alt={tag} width="40%" />
        <p className={css.name}>{name}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.title}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;