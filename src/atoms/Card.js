import "./Card.css";

//INBOX z figmy
export const Card = ({ backgroundColor, customStyle, children }) => {
  return <div style={{ backgroundColor, ...customStyle }}>{children}</div>;
};
