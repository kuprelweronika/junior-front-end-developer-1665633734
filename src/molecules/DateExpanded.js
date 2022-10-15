import { SmallText } from "../atoms";
import dateFormat from "dateformat";

export const DateExpanded = ({ date }) => {
  const dateFormatted = dateFormat(date, "DDDD, dS mmmm");

  return <SmallText>{dateFormatted} </SmallText>;
};
