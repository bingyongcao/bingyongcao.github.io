import type { Metadata } from 'next';

import { resumeData } from '../../data/resume';

export const metadata: Metadata = {
  title: 'Resume | Bingyong Cao',
  description: '教育背景、工作经历、技能与科研成果。',
};

export default function ResumePage() {
  return (
    <section className="section">
      <header className="resume-header">
        <div className="eyebrow">Resume</div>
        <h1>曹炳勇</h1>
        <p className="lede">{resumeData.summary}</p>
      </header>

      <div className="resume-layout">
        <aside className="resume-stack">
          <section className="resume-card resume-section">
            <h2>联系方式</h2>
            <p>{resumeData.contact.email}</p>
            <p>{resumeData.contact.location}</p>
          </section>

          <section className="resume-card resume-section">
            <h2>教育背景</h2>
            {resumeData.education.map((entry) => (
              <div key={`${entry.degree}-${entry.institution}`} className="education-entry">
                <div className="education-topline">
                  <span className="education-degree">{entry.degree}</span>
                  <span className="education-period">{entry.period}</span>
                </div>
                <div className="education-heading">
                  <h3>{entry.institution}</h3>
                  <span className="education-major">{entry.major}</span>
                </div>
                <div className="education-meta">
                  <span className="education-meta__label">研究方向</span>
                  <span>{entry.researchDirection}</span>
                </div>
              </div>
            ))}
          </section>

          <section className="resume-card resume-section">
            <h2>技能</h2>
            <div className="pill-list">
              {resumeData.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="resume-card resume-section">
            <h2>技术优势</h2>
            {resumeData.strengths.map((strength) => (
              <div key={strength.title}>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </div>
            ))}
          </section>

          <section className="resume-card resume-section">
            <h2>爱好</h2>
            <div className="pill-list">
              {resumeData.interests.map((interest) => (
                <span key={interest} className="pill">
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </aside>

        <div className="resume-stack">
          <section className="timeline">
            {resumeData.experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="timeline-item">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                </div>
                <h3>{item.company}</h3>
                <p className="timeline-role">{item.role}</p>
                <ul className="resume-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="resume-card resume-section">
            <h2>科研成果</h2>
            <div className="publication-list">
              {resumeData.publications.map((publication) => (
                <article key={publication.title} className="publication-item">
                  <div className="publication-topline">
                    <span className="publication-label">Paper</span>
                    <span className="publication-index">{publication.index}</span>
                  </div>
                  <h3>{publication.title}</h3>
                  <p>{publication.journal}</p>
                </article>
              ))}
            </div>
          </section>

        </div>
      </div>
    </section>
  );
}