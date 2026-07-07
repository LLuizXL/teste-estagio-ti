import { BsLinkedin } from "react-icons/bs";
import "./Footer.modules.css";
import { BiLogoGithub } from "react-icons/bi";
const Footer = () => {
  const data = new Date();
  return (
    <footer
      className="mt-5 border-top border-black p-5 d-flex flex-column align-items-center gap-3"
      role="contentinfo"
    >
      <small className="text-secondary"> &copy; {data.getFullYear()} </small>
      <div
        className="d-flex gap-3"
        role="group"
        aria-label="Links de contato e redes sociais"
      >
        <a
          href=""
          className="link"
          aria-label="Visite meu LinkedIn"
          title="LinkedIn"
        >
          <BsLinkedin aria-hidden="true" />
        </a>
        <a
          href=""
          className="link"
          aria-label="Visite meu GitHub"
          title="GitHub"
        >
          <BiLogoGithub aria-hidden="true" />
        </a>
        <a
          href="mailto:luiz.mwlo76@gmail.com"
          className="link"
          aria-label="Envie um email"
        >
          luiz.mwlo76@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
