
import "./Footer.modules.css"
const Footer = () => {
  const data = new Date()
  return (
    <footer className="mt-5 border-top p-5 d-flex flex-column align-items-center gap-3 bg-body-secondary">
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