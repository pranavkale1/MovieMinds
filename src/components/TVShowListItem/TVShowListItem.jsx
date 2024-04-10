import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

const MAX_TITLE_CHAR = 35;

export function TVShowListItem({ tvShow, onClick }) {
  const onCLick_ = () => {
    onClick(tvShow);
  };

  return (
    <div onClick={onCLick_} className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
