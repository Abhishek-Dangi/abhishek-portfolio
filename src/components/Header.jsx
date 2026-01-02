import { HashLink as Link } from 'react-router-hash-link'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-prodigy" to="#">Abhishek Dangi</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link nav-link-prodigy" smooth to="#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link nav-link-prodigy" smooth to="#skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link nav-link-prodigy" smooth to="#experience">Experience</Link></li>
            <li className="nav-item"><Link className="nav-link nav-link-prodigy" smooth to="#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link nav-link-prodigy" smooth to="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}