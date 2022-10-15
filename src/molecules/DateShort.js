import { SmallText } from "../atoms";
import dateFormat from "dateformat";

export const DateShort = ({ date }) => {
  const dateFormatted = dateFormat(date, "mmm d");

  return <SmallText>{dateFormatted} </SmallText>;
};
