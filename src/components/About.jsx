export default function About() {
    return (
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">About Me</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <p className="card-text">
                    <strong>B.Sc (IT Branch)</strong><br />
                    DAVV Indore (M.P.)<br />
                    2020 – 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Languages</h5>
                  <ul className="list-unstyled">
                    <li>English</li>
                    <li>Hindi</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Interests</h5>
                  <ul className="list-unstyled">
                    <li>Coding</li>
                    <li>Traveling</li>
                    <li>Internet Surfing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }