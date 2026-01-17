import React, { useMemo, useState } from "react";
import "./styles.css";
import Section from "./components/Section";
import Tabs from "./components/Tabs";
import Card from "./components/Card";
import Tag from "./components/Tag";
import ButtonLink from "./components/ButtonLink";
import {
  profile,
  nav,
  about,
  skills,
  experience,
  education,
  projects,
  papers,
  awards,
  activities,
  leadership
} from "./data/content";

function resumeUrl() {
  return `${import.meta.env.BASE_URL}${profile.resumeFile}`;
}

export default function App() {
  const [active, setActive] = useState<string>("about");
  const [query, setQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) => {
      const hay = `${p.name} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="heroInner">
          <h1 className="heroName">{profile.name}</h1>

          <div className="heroMeta">
            <span className="metaItem">
              <i className="bi bi-telephone" />
              <span>{profile.phone}</span>
            </span>
            <span className="sep">|</span>
            <span className="metaItem">
              <i className="bi bi-envelope" />
              <span>{profile.email}</span>
            </span>
          </div>

          <div className="heroLinks">
            <a className="iconLink" href={profile.linkedin} target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin" />
              <span>LinkedIn</span>
            </a>
            <span className="sep">|</span>
            <a className="iconLink" href={profile.github} target="_blank" rel="noreferrer">
              <i className="bi bi-github" />
              <span>GitHub</span>
            </a>
            <span className="sep">|</span>
            <a className="iconLink" href={profile.googleScholar} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-google-scholar" />
              <span>Google Scholar</span>
            </a>
          </div>

          <div className="heroCtas">
            <a className="btnPrimary" href={resumeUrl()} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <Tabs items={nav} activeId={active} onClick={scrollTo} />
        </div>
      </header>

      <main className="content">
        <Section id="about" title="About Me">
          {about.map((p) => (
            <p key={p} className="para">
              {p}
            </p>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <div className="skillsGrid">
            {skills.map((g) => (
              <Card key={g.group}>
                <div className="cardTitle">{g.group}</div>
                <div className="tags">
                  {g.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="experienceList">
            {experience.map((x) => (
              <Card key={`${x.company}-${x.title}-${x.timeframe}`}>
                <div className="expHeader">
                  <div className="expLeft">
                    <div className="expTitle">{x.title}</div>
                    <div className="expCompany">{x.company}</div>
                  </div>

                  <div className="expRight">
                    <div className="expTime">{x.timeframe}</div>
                    <div className="expLoc">{x.location}</div>
                  </div>
                </div>

                <ul className="list">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="educationList">
            {education.map((e) => (
              <Card key={`${e.school}-${e.timeframe}`}>
                <div className="eduHeader">
                  <div className="eduLeft">
                    <div className="eduDegree">{e.degree}</div>
                    <div className="eduSchool">{e.school}</div>
                  </div>

                  <div className="eduRight">
                    <div className="eduTime">{e.timeframe}</div>
                  </div>
                </div>

                <div className="eduMeta">{e.gpa}</div>

                <div className="eduBlock">
                  <div className="eduLabel">Relevant Coursework</div>
                  <div className="tags">
                    {e.coursework.map((c) => (
                      <Tag key={c}>{c}</Tag>
                    ))}
                  </div>
                </div>

                <div className="eduBlock">
                  <div className="eduLabel">Honors</div>
                  <ul className="list">
                    {e.honors.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          right={
            <input
              className="searchInput"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
            />
          }
        >
          <div className="grid">
            {filteredProjects.map((p) => (
              <Card key={p.name}>
                <div className="cardTitle">{p.name}</div>
                <p className="para">{p.description}</p>

                <div className="tags">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {p.links && p.links.length ? (
                  <div className="actions">
                    {p.links.map((l) => (
                      <ButtonLink key={l.href} href={l.href}>
                        {l.label}
                      </ButtonLink>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
          {filteredProjects.length === 0 ? <div className="empty">No matching projects.</div> : null}
        </Section>

        <Section id="research" title="Research Papers">
          <div className="grid">
            {papers.map((p) => (
              <Card key={p.doi}>
                <div className="cardTitle">{p.title}</div>
                <div className="cardSub">{p.venue}</div>
                <div className="doiRow">
                  <span className="doiLabel">DOI:</span> <span>{p.doi}</span>
                </div>
                <div className="actions">
                  <ButtonLink href={p.href}>View Paper</ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="awards" title="Awards">
          <ul className="list">
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Section>

        <Section id="activities" title="Extra-Curricular Activities">
          <ul className="list">
            {activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Section>

        <Section id="leadership" title="Leadership">
          <div className="grid">
            {leadership.map((l) => (
              <Card key={l.org}>
                <div className="cardTitle">{l.org}</div>
                <div className="cardSub">{l.role}</div>
                <ul className="list">
                  {l.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contactGrid">
            <Card>
              <div className="cardTitle">Email</div>
              <a className="contactLink" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </Card>

            <Card>
              <div className="cardTitle">Mobile</div>
              <a className="contactLink" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </Card>
          </div>
        </Section>

        <footer className="footer">
          <div className="muted">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            |{" "}
            <a href={profile.googleScholar} target="_blank" rel="noreferrer"> 
              Google Scholar 
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
