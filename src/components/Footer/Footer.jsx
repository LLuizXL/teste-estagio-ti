
import "./Footer.modules.css"
const Footer = () => {
  const data = new Date()
  return (
    <footer className="fixed-bottom border-top p-3 d-flex flex-column align-items-center gap-3">
          <small className="text-secondary"> &copy; {data.getFullYear()} </small>
              <div className="d-flex gap-3">
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">link 3</a>
              </div>
        
    </footer>
  )
}

export default Footer