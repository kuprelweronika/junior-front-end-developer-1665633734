import "./BigText.css";
//TEXT tytulu mejla w tresci mejla
export const BigText = ({ color, children }) => {
  return (
    <p className="bigText" style={{ color }}>
      {children}
    </p>
  );
};
