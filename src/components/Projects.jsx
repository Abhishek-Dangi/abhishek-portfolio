export default function Projects() {
    const list = [
      {
        title: 'Health Track',
        link: 'https://www.setpointhealth.com',
        tech: 'ASP.NET Core, C#, Entity Framework, Vue.js, Bootstrap'
      },
      {
        title: 'TrackMyDay',
        link: 'https://www.trackmyday.org',
        tech: '.NET Framework, C#, SSMS, Entity Framework, Vue.js, JavaScript'
      },
      {
        title: 'Big Breaking News',
        link: 'https://bigbreaking.com',
        tech: 'ASP.NET Core, C#, SSMS, Entity Framework, HTML5, CSS3, JavaScript, LINQ'
      },
      {
        title: 'RoomRent / Dreamhomes',
        link: '#',
        tech: 'React, Node.js, Express, MongoDB, Bootstrap, jQuery'
      }
    ];
  
    return (
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row g-4">
            {list.map((p, i) => (
              <div key={i} className="col-md-6">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text flex-grow-1"><small className="text-muted">{p.tech}</small></p>
                    {p.link !== '#' ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-auto">
                        View Live
                      </a>
                    ) : (
                      <span className="text-muted mt-auto">Source code on GitHub</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }