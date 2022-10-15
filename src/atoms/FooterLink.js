import "./FooterLink.css";

export const FooterLink = ({ children, link }) => {
  return (
    <a className="FooterLink" href={link}>
      {children}
    </a>
  );
};
