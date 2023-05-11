// Styles
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-container center justify-between">
      <span>lets get connected</span>
      <div className="center">
        <a
          href="https://www.linkedin.com/in/avinash-gupta-3321041ba/"
          className="footer-link"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/Avinash35925012" className="footer-link">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://leetcode.com/tier_3_guy/" className="footer-link">
          <i className="fa-solid fa-code"></i>
        </a>
        <a href="https://github.com/tier3guy/" className="footer-link">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:avinashgupta.works@gmail.com" className="footer-link">
          <i className="fa-solid fa-at"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
