import "./Footer.css";

const goToPortfolio = async () => {
  window.open(`https://portfoliogovind.netlify.app/`, "_blank");
};

const Footer = () => {
  return (
    <footer className="footer-wrapper bg-white">
      <span
        className="blue_color"
        onClick={() => {
          goToPortfolio();
        }}
      >
        Please Visit My Portfolio
      </span>
    </footer>
  );
};

export default Footer;
