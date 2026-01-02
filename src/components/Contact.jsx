import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container py-4">
        <h2 className="section-title text-center w-100 mb-5">Get In Touch</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card-hover p-4 p-md-5 text-center border-0 shadow">
              <h3 className="fw-bold mb-4">Let's Connect</h3>
              <p className="text-secondary mb-5">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="row g-4 justify-content-center text-start">
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3">
                    <div className="bg-white p-2 rounded-circle shadow-sm text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <FiMail size={20} />
                    </div>
                    <div className="ms-3 overflow-hidden">
                      <small className="text-muted d-block uppercase tracking-wider" style={{ fontSize: '0.7em', letterSpacing: '1px' }}>EMAIL</small>
                      <a href="mailto:abhishekdangi2841@gmail.com" className="text-dark fw-medium text-decoration-none text-truncate d-block">abhishekdangi2841@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3">
                    <div className="bg-white p-2 rounded-circle shadow-sm text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <FiPhone size={20} />
                    </div>
                    <div className="ms-3">
                      <small className="text-muted d-block uppercase tracking-wider" style={{ fontSize: '0.7em', letterSpacing: '1px' }}>PHONE</small>
                      <a href="tel:+918120128141" className="text-dark fw-medium text-decoration-none">+91 8120128141</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3">
                    <div className="bg-white p-2 rounded-circle shadow-sm text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <FiLinkedin size={20} />
                    </div>
                    <div className="ms-3">
                      <small className="text-muted d-block uppercase tracking-wider" style={{ fontSize: '0.7em', letterSpacing: '1px' }}>LINKEDIN</small>
                      <a href="https://linkedin.com/in/abhishek-dangi-7b757b241/" target="_blank" rel="noopener noreferrer" className="text-dark fw-medium text-decoration-none">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3">
                    <div className="bg-white p-2 rounded-circle shadow-sm text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <FiGithub size={20} />
                    </div>
                    <div className="ms-3">
                      <small className="text-muted d-block uppercase tracking-wider" style={{ fontSize: '0.7em', letterSpacing: '1px' }}>GITHUB</small>
                      <a href="https://github.com/Abhishek-Dangi" target="_blank" rel="noopener noreferrer" className="text-dark fw-medium text-decoration-none">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-muted small">Based in Dewas (M.P.), India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}