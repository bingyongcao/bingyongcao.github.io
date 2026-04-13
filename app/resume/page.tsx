import type { Metadata } from 'next';

import { resumeData } from '../../data/resume';
import { siteConfig } from '../../data/site';

export const metadata: Metadata = {
  title: 'Resume | Bingyong Cao',
  description: 'Professional background, skills, and experience.',
};

export default function ResumePage() {
  return (
    <section className="section">
      <header className="resume-header">
        <div className="eyebrow">Resume</div>
        <h1>{siteConfig.name}</h1>
        <p className="lede">{resumeData.summary}</p>
      </header>

      <div className="resume-layout">
        <aside className="resume-stack">
          <section className="resume-card resume-section">
            <h2>Contact</h2>
            <p>{resumeData.contact.email}</p>
            <p>{resumeData.contact.location}</p>
            <p>{resumeData.contact.website}</p>
          </section>

          <section className="resume-card resume-section">
            <h2>Skills</h2>
            <div className="pill-list">
              {resumeData.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="resume-card resume-section">
            <h2>Strengths</h2>
            {resumeData.strengths.map((strength) => (
              <div key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </div>
            ))}
          </section>
        </aside>

        <div className="resume-stack">
          <section className="timeline">
            {resumeData.experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="timeline-item">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span>{item.company}</span>
                </div>
                <h3>{item.role}</h3>
                <ul className="resume-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="resume-card resume-section">
            <h2>Education</h2>
            {resumeData.education.map((entry) => (
              <div key={`${entry.degree}-${entry.institution}`}>
                <h3>{entry.degree}</h3>
                <div className="timeline-meta">
                  <span>{entry.institution}</span>
                  <span>{entry.period}</span>
                </div>
                <p>{entry.notes}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}