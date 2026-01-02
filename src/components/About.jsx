import { FiAward, FiGlobe, FiCpu, FiCode, FiMap, FiActivity } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-5" style={{ background: '#ffffff' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title h1">About Me</h2>
          <p className="text-secondary col-md-8 mx-auto lead">
            Passionate developer with a strong foundation in .NET technologies and a knack for building user-centric applications.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card-hover h-100 p-4 text-center">
              <div className="mb-3 text-primary">
                <FiAward size={48} />
              </div>
              <h4 className="fw-bold mb-3">Education</h4>
              <p className="text-secondary mb-0">
                <strong>B.Sc (IT Branch)</strong><br />
                DAVV Indore (M.P.)<br />
                <span className="badge bg-light text-dark mt-2">2020 – 2023</span>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-hover h-100 p-4 text-center">
              <div className="mb-3 text-primary">
                <FiGlobe size={48} />
              </div>
              <h4 className="fw-bold mb-3">Languages</h4>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2">English (Professional)</li>
                <li>Hindi (Native)</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-hover h-100 p-4 text-center">
              <div className="mb-3 text-primary">
                <FiActivity size={48} />
              </div>
              <h4 className="fw-bold mb-3">Interests</h4>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                <span className="badge bg-primary bg-opacity-10 text-primary d-flex align-items-center gap-1"><FiCode /> Coding</span>
                <span className="badge bg-primary bg-opacity-10 text-primary d-flex align-items-center gap-1"><FiMap /> Traveling</span>
                <span className="badge bg-primary bg-opacity-10 text-primary d-flex align-items-center gap-1"><FiCpu /> Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}