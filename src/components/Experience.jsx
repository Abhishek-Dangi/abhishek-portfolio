export default function Experience() {
    return (
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
  
          {/* Current Job */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Software Developer (Remote) – <span className="text-primary">ARSTEG Solution (P) Ltd.</span></h5>
              <p className="card-subtitle mb-2 text-muted">Sep 2023 – Present</p>
              <ul>
                <li>Developed <strong>Health Track</strong> & <strong>TrackMyDay</strong> using ASP.NET Core.</li>
                <li>Built responsive UI with Bootstrap & Vue.js.</li>
                <li>Implemented backend logic with C# and Entity Framework.</li>
              </ul>
            </div>
          </div>
  
          {/* Previous Job */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Web Developer – <span className="text-primary">myAma Technology</span></h5>
              <p className="card-subtitle mb-2 text-muted">Dec 2022 – Sep 2023</p>
            </div>
          </div>
  
          {/* Internship */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Web Developer Intern (ASP.NET Core) – <span className="text-primary">myAma Technology</span></h5>
              <p className="card-subtitle mb-2 text-muted">Jul 2022 – Nov 2022 (5 months)</p>
            </div>
          </div>
  
          {/* MERN Training */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">MERN Stack Training – <span className="text-primary">Universal Informatics, Indore</span></h5>
              <p className="card-subtitle mb-2 text-muted">May 2022 – Nov 2022 (6 months)</p>
              <p>Built <strong>RoomRent</strong>, <strong>Dreamhomes</strong> etc. with React, Node.js, Express, MongoDB.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }