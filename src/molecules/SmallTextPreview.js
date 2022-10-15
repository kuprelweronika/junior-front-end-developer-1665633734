import { SmallText } from "../atoms";

export const SmallTextPreview = ({ message }) => {
  const shortened =
    message.length > 100 ? message.slice(0, 100) + "..." : message;
  return <SmallText>{shortened}</SmallText>;
};
