export default function Skills() {
  const skills = [
    { name: 'ASP.NET Core', category: 'Backend' },
    { name: 'Entity Framework', category: 'Backend' },
    { name: 'LINQ', category: 'Backend' },
    { name: 'C#', category: 'Language' },
    { name: 'C++ (OOP)', category: 'Language' },
    { name: 'C Language', category: 'Language' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript (ES6)', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'GitHub', category: 'Tool' },
    { name: 'VS Code', category: 'Tool' }
  ];

  return (
    <section id="skills" className="py-5" style={{ background: '#f8fafc' }}>
      <div className="container py-4">
        <h2 className="section-title text-center w-100">Technical Skills</h2>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-hover p-3 p-md-5 text-center">
              <p className="lead text-secondary mb-3 mb-md-5">
                A comprehensive toolset for building modern full-stack applications.
              </p>

              <div className="d-flex flex-wrap gap-2 gap-md-3 justify-content-center">
                {skills.map((s, i) => (
                  <span
                    key={i}
                    className="badge bg-white text-secondary border px-3 px-md-4 py-2 py-md-3 rounded-pill shadow-sm fs-6 fw-normal d-flex align-items-center gap-2"
                    style={{ transition: 'all 0.2s ease', cursor: 'default' }}
                    onMouseEnter={(e) => {
                      e.target.classList.remove('bg-white', 'text-secondary');
                      e.target.classList.add('bg-primary', 'text-white');
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.classList.add('bg-white', 'text-secondary');
                      e.target.classList.remove('bg-primary', 'text-white');
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <span className="opacity-50">#</span> {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}