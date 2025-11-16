export default function Contact() {
    return (
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Contact</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Phone</span>
                  <a href="tel:+918120128141">+91 8120128141</a>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Email</span>
                  <a href="mailto:abhishekdangi2841@gmail.com">abhishekdang2841@gmail.com</a>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Alternate Email</span>
                  <a href="mailto:abhishekdangi2841@outlook.com">abhishekdang2841@outlook.com</a>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Location</span>
                  <span>Dewas (M.P.)</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/abhishek-dangi-7b757b241/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/abhishek-dangi-...
                  </a>
                </li> 
                <li className="list-group-item d-flex justify-content-between">
                  <span>GitHub</span>
                  <a href="https://github.com/Abhishek-Dangi" target="_blank" rel="noopener noreferrer">
                    github.com/AbhishekDangi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }