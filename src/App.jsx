import { profile, skills, projects, experience } from "./data";
import profilePhoto from "./assets/profile-photo.jpg";

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.67c-2.67.58-3.23-1.13-3.23-1.13-.44-1.11-1.07-1.4-1.07-1.4-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.46 2.25 1.04 2.8.8.09-.62.34-1.04.61-1.28-2.13-.24-4.37-1.06-4.37-4.74 0-1.05.37-1.9.99-2.57-.1-.24-.43-1.22.09-2.54 0 0 .8-.26 2.61.98A9.1 9.1 0 0 1 12 7.08c.81 0 1.61.11 2.38.32 1.81-1.24 2.61-.98 2.61-.98.52 1.32.19 2.3.09 2.54.62.67.99 1.52.99 2.57 0 3.69-2.25 4.5-4.39 4.74.35.3.65.88.65 1.77v2.52c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.4 8.2H3.2V18h3.2V8.2ZM4.8 3.4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM18.9 12.4c0-3-1.6-4.5-3.8-4.5-1.75 0-2.54.96-2.98 1.64V8.2H8.9c.04.9 0 9.8 0 9.8h3.22v-5.47c0-.29.02-.58.11-.79.23-.58.76-1.19 1.65-1.19 1.17 0 1.63.89 1.63 2.19V18h3.22l.17-5.6Z" />
    </svg>
  );
}

function MiniChart() {
  return (
    <div className="chart-card" aria-hidden="true">
      <div className="chart-top">
        <div>
          <span className="chart-label">Performance</span>
          <strong>+24.8%</strong>
        </div>
        <span className="positive">↑ 8.2%</span>
      </div>

      <svg className="chart" viewBox="0 0 480 210" preserveAspectRatio="none">
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity=".18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="chart-grid"
          d="M0 35H480M0 90H480M0 145H480M0 200H480"
        />
        <path
          className="chart-area"
          d="M0 170 C45 155, 60 165, 92 135 S145 115, 174 130 S224 85, 255 95 S312 63, 348 78 S395 45, 430 58 S458 34, 480 24 L480 210 L0 210 Z"
        />
        <path
          className="chart-line"
          d="M0 170 C45 155, 60 165, 92 135 S145 115, 174 130 S224 85, 255 95 S312 63, 348 78 S395 45, 430 58 S458 34, 480 24"
        />
      </svg>

      <div className="chart-footer">
        <span>JAN</span>
        <span>MAR</span>
        <span>MAI</span>
        <span>JUL</span>
        <span>SET</span>
        <span>NOV</span>
      </div>
    </div>
  );
}


function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src={profilePhoto}
        alt="Foto de Ítalo Silva"
        className="profile-photo"
      />

      <div className="profile-card-footer">
        <div>
          <span className="chart-label">PERFIL</span>
          <strong>Ítalo Silva</strong>
        </div>
        <p>
          Portfólio com foco em análise de dados, visualização e soluções
          orientadas por informação.
        </p>
      </div>
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Ir para o início">
            IS<span>.</span>
          </a>

          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Experiência</a>
          </nav>

          <a
            className="nav-cta"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                {profile.availability}
              </div>

              <h1>
                Dados claros.
                <br />
                Decisões <em>melhores.</em>
              </h1>

              <p className="hero-description">
                {profile.headline}
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projetos">
                  Ver projetos
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button secondary"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <span>Base</span>
                  <strong>{profile.location}</strong>
                </div>
                <div>
                  <span>Foco</span>
                  <strong>Data Analytics</strong>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-badge">DATA / 2026</div>
              <ProfileCard />
              <div className="metric-grid">
                <div className="metric-card">
                  <span>STACK</span>
                  <strong>SQL</strong>
                  <small>Consultas & análise</small>
                </div>
                <div className="metric-card">
                  <span>VIZ</span>
                  <strong>BI</strong>
                  <small>Dashboards & KPIs</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="divider" />
        </div>

        <section className="section about" id="sobre">
          <div className="container two-column">
            <div className="section-heading">
              <span className="section-index">01</span>
              <p>SOBRE</p>
            </div>

            <div className="about-content">
              <h2>
                Analiso o problema antes
                <br />
                de procurar o gráfico.
              </h2>

              <div className="about-copy-grid">
                <p>
                  Sou estudante de Sistemas de Informação com foco em análise de
                  dados, bancos de dados e tecnologia. Minha abordagem combina
                  raciocínio analítico, organização e comunicação para transformar
                  dados em informações compreensíveis.
                </p>
                <p>
                  Tenho experiência com SQL, modelagem de dados, Python e
                  desenvolvimento de software, além de vivência profissional com
                  avaliação e qualidade de dados em projetos de inteligência
                  artificial.
                </p>
              </div>

              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Conhecer minha trajetória no LinkedIn
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading horizontal">
              <div>
                <span className="section-index">02</span>
                <p>COMPETÊNCIAS</p>
              </div>
              <p className="section-note">
                Ferramentas que uso para organizar, analisar e comunicar dados.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.category}>
                  <span className="skill-number">
                    {String(skills.indexOf(skill) + 1).padStart(2, "0")}
                  </span>
                  <h3>{skill.category}</h3>
                  <div className="skill-list">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="container">
            <div className="section-heading horizontal projects-heading">
              <div>
                <span className="section-index">03</span>
                <p>PROJETOS</p>
              </div>
              <h2>Trabalho que mostra processo, não só resultado.</h2>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <a
                  className="project-row"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={project.number}
                >
                  <span className="project-number">{project.number}</span>

                  <div className="project-main">
                    <div className="project-title-line">
                      <h3>{project.title}</h3>
                      <span className="project-status">{project.status}</span>
                    </div>

                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <span className="project-arrow">
                    <ArrowUpRight />
                  </span>
                </a>
              ))}
            </div>

            <p className="projects-footnote">
              Dica: substitua os links gerais do GitHub pelos repositórios específicos
              de cada projeto conforme você for publicando seus cases.
            </p>
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="container two-column">
            <div className="section-heading">
              <span className="section-index">04</span>
              <p>TRAJETÓRIA</p>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <span>{item.company}</span>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-card">
            <div>
              <span className="section-index light">05</span>
              <p className="contact-kicker">CONTATO</p>
            </div>

            <div className="contact-copy">
              <h2>
                Vamos transformar
                <br />
                dados em decisões?
              </h2>
              <p>
                Estou aberto a oportunidades e conversas sobre análise de dados,
                BI, SQL e projetos orientados por informação.
              </p>

              <div className="contact-actions">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="button light"
                >
                  <LinkedinIcon />
                  Falar pelo LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button ghost-light"
                >
                  <GithubIcon />
                  Ver GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <span>© {currentYear} {profile.name}</span>
          <span>Analista de Dados · Pará, Brasil</span>
        </div>
      </footer>
    </>
  );
}

export default App;
