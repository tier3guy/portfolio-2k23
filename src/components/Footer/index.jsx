// Styles
import "./styles.css";

const Footer = () => {
  const mailId = "avinashgupta.works@gmail.com";
  return (
    <>
      <div className="experience-container container center flex-column">
        <span>get in touch</span>
        <p className="home-subheading" style={{ marginTop: "30px" }}>
          Thank you for visiting my portfolio! I would love to hear from you and
          explore potential collaborations or answer any questions you may have.
          Please feel free to reach out to me using the contact information
          provided below. Let's connect and bring our creative visions to life!
        </p>
        <p
          style={{
            textAlign: "center",
          }}
        >
          For any kind of query or collaborations. Feel free to reach out to me.
        </p>
        <a
          href={`mailto:${mailId}`}
          className="border-bottom"
          style={{ marginTop: "20px" }}
        >
          {mailId}
        </a>
      </div>
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
    </>
  );
};

export default Footer;
