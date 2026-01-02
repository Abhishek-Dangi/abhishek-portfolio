import { FiMonitor } from 'react-icons/fi';

export default function Projects() {
  const list = [
    {
      title: 'Health Track',
      link: 'https://www.setpointhealth.com',
      tech: 'ASP.NET Core • Vue.js',
      desc: 'Healthcare platform for tracking patient vitals and progress.'
    },
    {
      title: 'TrackMyDay',
      link: 'https://www.trackmyday.org',
      tech: '.NET Framework • Vue.js',
      desc: 'Productivity tool for daily task management and tracking.'
    },
    {
      title: 'Big Breaking News',
      link: 'https://bigbreaking.com',
      tech: 'ASP.NET Core • HTML5',
      desc: 'News aggregation portal with real-time updates.'
    },
    {
      title: 'RoomRent / Dreamhomes',
      link: '#',
      tech: 'MERN Stack',
      desc: 'Real estate platform for finding rental properties.'
    }
  ];

  return (
    <section id="projects" className="py-5" style={{ background: '#f8fafc' }}>
      <div className="container py-4">
        <h2 className="section-title text-center w-100 mb-5">Featured Projects</h2>

        <div className="row g-4">
          {list.map((p, i) => (
            <div key={i} className="col-md-6">
              <div className="card-hover h-100 d-flex flex-column p-0 border-0 overflow-hidden">
                <div className="bg-gradient-primary p-4 bg-opacity-10" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f1f5f9 100%)', height: '150px' }}>
                  {/* Placeholder for project image */}
                  <div className="d-flex align-items-center justify-content-center h-100 text-primary opacity-50">
                    <FiMonitor size={48} />
                  </div>
                </div>

                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="fw-bold mb-0">{p.title}</h5>
                  </div>
                  <p className="small text-primary fw-medium mb-3">{p.tech}</p>
                  <p className="text-secondary flex-grow-1">{p.desc}</p>

                  <div className="mt-3">
                    {p.link !== '#' ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary-custom w-100 text-center">
                        Visit Website
                      </a>
                    ) : (
                      <button disabled className="btn btn-secondary w-100 opacity-75" style={{ cursor: 'not-allowed' }}>
                        Internal Project
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}