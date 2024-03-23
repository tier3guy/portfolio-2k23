const Footer = () => {
  const mailId = "avinashgupta.works@gmail.com";
  return (
    <>
      <div className="flex flex-col gap-4 w-[92%] md:w-[80%] m-auto mt-20">
        <span className="md:text-center text-primary text-7xl font-cursive">
          get in touch
        </span>
        <p className="md:text-center md:w-2/3 mt-5 md:m-auto">
          Thank you for visiting my portfolio! I would love to hear from you and
          explore potential collaborations or answer any questions you may have.
          Please feel free to reach out to me using the contact information
          provided below. Let's connect and bring our creative visions to life!
        </p>
        <p className="md:text-center md:w-2/3 md:m-auto">
          For any kind of query or collaborations. Feel free to reach out to me.
        </p>
        <a
          href={`mailto:${mailId}`}
          className="md:text-center md:w-fit md:m-auto border-b-[2px] border-primary w-fit"
        >
          {mailId}
        </a>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mt-20 w-[92%] md:w-[80%] m-auto">
        <span className="text-primary text-6xl font-cursive md:mt-10">
          lets get connected
        </span>
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/avinash-gupta-3321041ba/"
            className="footer-link"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/tier3guy" className="footer-link">
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
