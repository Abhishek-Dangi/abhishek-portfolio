import { FiBriefcase, FiMonitor, FiBookOpen } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-white">
      <div className="container py-4">
        <h2 className="section-title text-center w-100 mb-5">Experience</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 position-relative">
            {/* Timeline Line */}
            <div
              className="position-absolute h-100 border-start border-2 border-light d-none d-md-block"
              style={{ left: '20px', top: '0', zIndex: 0 }}
            ></div>

            {/* Experience 1 */}
            <div className="d-flex mb-5 position-relative" style={{ zIndex: 1 }}>
              <div
                className="bg-primary rounded-circle border border-4 border-white shadow-sm flex-shrink-0 text-white d-none d-md-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
              >
                <FiBriefcase size={20} />
              </div>
              <div className="ms-4 w-100">
                <div className="card-hover p-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                    <h5 className="mb-0 fw-bold">Software Developer (Remote)</h5>
                    <span className="badge bg-primary bg-opacity-10 text-primary">Sep 2023 – Present</span>
                  </div>
                  <h6 className="text-secondary mb-3">ARSTEG Solution (P) Ltd.</h6>
                  <ul className="text-secondary mb-0 ps-3">
                    <li className="mb-2">Developed <strong>Health Track</strong> & <strong>TrackMyDay</strong> utilizing ASP.NET Core & Entity Framework.</li>
                    <li className="mb-2">Architected responsive and intuitive UIs using Vue.js and Bootstrap.</li>
                    <li>Optimized backend performance and database queries.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="d-flex mb-5 position-relative" style={{ zIndex: 1 }}>
              <div
                className="bg-white border rounded-circle border-4 border-light shadow-sm flex-shrink-0 text-primary d-none d-md-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
              >
                <FiMonitor size={20} />
              </div>
              <div className="ms-4 w-100">
                <div className="card-hover p-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                    <h5 className="mb-0 fw-bold">Web Developer</h5>
                    <span className="badge bg-light text-secondary">Dec 2022 – Sep 2023</span>
                  </div>
                  <h6 className="text-secondary mb-0">myAma Technology</h6>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="d-flex mb-5 position-relative" style={{ zIndex: 1 }}>
              <div
                className="bg-white border rounded-circle border-4 border-light shadow-sm flex-shrink-0 text-primary d-none d-md-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
              >
                <FiBookOpen size={20} />
              </div>
              <div className="ms-4 w-100">
                <div className="card-hover p-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                    <h5 className="mb-0 fw-bold">Web Developer Intern</h5>
                    <span className="badge bg-light text-secondary">Jul 2022 – Nov 2022</span>
                  </div>
                  <h6 className="text-secondary mb-0">myAma Technology</h6>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="d-flex position-relative" style={{ zIndex: 1 }}>
              <div
                className="bg-white border rounded-circle border-4 border-light shadow-sm flex-shrink-0 text-primary d-none d-md-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
              >
                <FiBookOpen size={20} />
              </div>
              <div className="ms-4 w-100">
                <div className="card-hover p-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                    <h5 className="mb-0 fw-bold">MERN Stack Training</h5>
                    <span className="badge bg-light text-secondary">May 2022 – Nov 2022</span>
                  </div>
                  <h6 className="text-secondary mb-2">Universal Informatics, Indore</h6>
                  <p className="small text-muted mb-0">Built projects using MERN stack.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}