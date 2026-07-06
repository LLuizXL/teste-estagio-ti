
import { BsLinkedin } from "react-icons/bs"
import "./Footer.modules.css"
import { BiLogoGithub } from "react-icons/bi"
const Footer = () => {
  const data = new Date()
  return (
    <footer className="mt-5 border-top border-black p-5 d-flex flex-column align-items-center gap-3">
          <small className="text-secondary"> &copy; {data.getFullYear()} </small>
              <div className="d-flex gap-3">
            <a href="" className="link"><BsLinkedin /></a>
            <a href="" className="link"><BiLogoGithub /></a>
            <a href="" className="link">luiz.mwlo76@gmail.com</a>
              </div>
        
    </footer>
  )
}

export default Footer