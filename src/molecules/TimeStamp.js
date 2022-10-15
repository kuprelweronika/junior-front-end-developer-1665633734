import dateFormat from "dateformat";
import { SmallText } from "../atoms";

export const TimeStamp = ({ time }) => {
  const timeFormatted = dateFormat(time, "HH:MM ");
  return <SmallText>{timeFormatted} </SmallText>;
};
