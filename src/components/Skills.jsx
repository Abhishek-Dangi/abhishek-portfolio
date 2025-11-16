export default function Skills() {
    const skills = [
      'ASP.NET Core', 'Entity Framework', 'LINQ', 'C#', 'C++ (OOP)', 'C Language',
      'HTML', 'CSS', 'JavaScript (ES6 OOP)', 'Vue.js', 'Bootstrap', 'GitHub',
      'Visual Studio Code'
    ];
  
    return (
      <section id="skills" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Technical Skills</h2>
          <div className="row row-cols-2 row-cols-md-4 g-3">
            {skills.map((s, i) => (
              <div key={i} className="col">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <p className="card-text fw-medium">{s}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }