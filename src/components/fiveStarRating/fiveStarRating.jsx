import {
  StarFill,
  StarHalf,
  Star as StarEmpty,
  Star,
} from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Declare Star Icon Array
  const starList = [];

  // store number of filled stars
  const StarFillCount = Math.floor(rating);

  // store number of half stars if present
  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  // store number of empty stars
  const emptyStarCount = 5 - StarFillCount - (hasHalfStar ? 1 : 0);

  // push the filled star icons
  for (let i = 1; i <= StarFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  // push half star if present
  if (hasHalfStar) starList.push(<StarHalf key={"star-half"} />);

  // push empty star icons
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}
