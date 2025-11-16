import { HashLink as Link } from 'react-router-hash-link'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="#">Abhishek Dangi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" smooth to="#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" smooth to="#skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" smooth to="#experience">Experience</Link></li>
            <li className="nav-item"><Link className="nav-link" smooth to="#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" smooth to="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}