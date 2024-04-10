import { FiveStarRating } from "../fiveStarRating/fiveStarRating";
import s from "./style.module.css";

export const TVShowDetails = ({ tvShow }) => {
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
};
