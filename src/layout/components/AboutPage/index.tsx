// File: src/layout/components/AboutPage/index.tsx
// Describes the OCCTIVE project, its goals, and project leadership.

import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const AboutPage: React.FC = () => (
  <section className="about-page">
    {/* Hero section */}
    <section className="home-page-hero">
      <header className="home-page-hero-content">
        <section className="home-page-hero-text">
          <h1 className="home-page-title">About the Project</h1>
          <p className="home-page-text">
            The OCCTIVE Project offers resources to introduce foundational computing concepts
            with applications in the sciences, humanities, and beyond.
          </p>
          <div className="home-page-hero-buttons">
            <Link to="/" className="btn-primary">
              Explore the Library
            </Link>
            <Link to="/adopt" className="btn-secondary">
              Adopt OCCTIVE
            </Link>
          </div>
        </section>
      </header>
    </section>

    {/* Project Abstract */}
    <section className="about-section">
      <div className="about-two-col">
        <div className="about-two-col-main">
          <h2 className="about-section-title">Project Abstract</h2>
          <p className="about-subtitle">
            The efficacy of a computing-concepts video library for students and peer tutors in
            multidisciplinary contexts
          </p>

          <p>
            This project aims to serve the national interest by preparing students in
            non-computing majors to use computational techniques in their academic
            work and future careers. Increasingly, students in all disciplines must
            learn to use computing technology. To meet the increased need for students
            to use computational methods across all fields, non-computing courses
            commonly integrate computational components into their curricula. However,
            many non-computing faculty are not prepared to teach the computing
            concepts that underlie the computational techniques that their students
            must master. This project will support non-computing faculty who are
            teaching computing concepts by developing a curated set of videos that
            provides the content needed for students to learn basic computing
            concepts. The infusion of foundational computing concepts into
            non-computing courses will increase both the number and diversity of
            students who are prepared to utilize computational technologies when they
            enter the workforce.
          </p>

          <p>This project&rsquo;s goals are to:</p>
        </div>

        <aside className="about-two-col-aside">
          <div className="about-stat-card">
            <div className="about-stat-number">4</div>
            <div className="about-stat-label">Partner Institutions</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">4</div>
            <div className="about-stat-label">NSF Awards</div>
          </div>
        </aside>
      </div>

      {/* Three-column goals */}
      <div className="about-goals-grid">
        <div className="about-goal-card">
          <span className="about-goal-badge">1</span>
          <h4 className="about-goal-title">Expand &amp; Strengthen</h4>
          <p>
            Expand and strengthen the OCCTIVE video library (Online Computing-Concepts
            Toolkit of Interdisciplinary Videos for Education), designed to introduce
            foundational computing concepts in non-CS courses.
          </p>
        </div>
        <div className="about-goal-card">
          <span className="about-goal-badge">2</span>
          <h4 className="about-goal-title">Broadly Disseminate</h4>
          <p>
            Broadly disseminate OCCTIVE for use by non-CS faculty and peer tutors.
          </p>
        </div>
        <div className="about-goal-card">
          <span className="about-goal-badge">3</span>
          <h4 className="about-goal-title">Assess Impact</h4>
          <p>
            Assess the impact of OCCTIVE use on students, faculty, and peer tutors.
          </p>
        </div>
      </div>

      <div className="about-content-continued">
        <p>
          The expansion and improvement of the OCCTIVE library will be informed by best
          practices in instructional video design. The videos will be supplemented with
          sample teaching material and other support materials that aid faculty adoption.
          Faculty, who will be recruited from a wide range of disciplines and institutions,
          will be trained to integrate OCCTIVE into their courses through in person and
          virtual workshops. The efficacy of the OCCTIVE library will be measured by
          assessing students&rsquo; comprehension of computing concepts,
          faculty&rsquo;s adoption of materials in their classes, and peer tutor
          experiences. The NSF IUSE: EDU Program supports research and development
          projects to improve the effectiveness of STEM education for all students.
          Through the Engaged Student Learning track, the program supports the
          creation, exploration, and implementation of promising practices and tools.
        </p>
      </div>
    </section>

    {/* About OCCTIVE */}
    <section className="about-section">
      <div className="about-two-col">
        <div className="about-two-col-main">
          <h2 className="about-section-title">About OCCTIVE</h2>
          <p>
            This multi-institution,{' '}
            <a
              href="https://www.nsf.gov/funding/opportunities/iuse-cue-improving-undergraduate-stem-education-computing/505630/nsf19-546/solicitation"
              target="_blank"
              rel="noopener noreferrer"
            >
              NSF-funded IUSE<span className="sr-only"> (opens in new tab)</span>
            </a>{' '}
            project extends previous work (see{' '}
            <a
              href="https://nsf-cue-frameworks.github.io/www/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              OCCTIVE Version 1<span className="sr-only"> (opens in new tab)</span>
            </a>
            , including the{' '}
            <a
              href="https://occtive.github.io/www/videos.html#Old_Videos_(from_original_project)"
              target="_blank"
              rel="noopener noreferrer"
            >
              archive of earlier videos<span className="sr-only"> (opens in new tab)</span>
            </a>
            ). The earlier project led to the initial development of{' '}
            <strong>
              OCCTIVE, the Online Computing-Concepts Toolkit of Interdisciplinary
              Videos for Education.
            </strong>{' '}
            This video library is intended primarily for use in non-CS courses that use
            computing, providing students with strong understanding of foundational
            concepts that will be transferable as they continue to encounter computing
            within their fields of study. In this new project we are improving the existing
            videos, adding new videos, and carrying out robust evaluation to determine the
            impact on students&rsquo; understanding of and ability to use core computing
            concepts.
          </p>
        </div>

        <aside className="about-two-col-aside">
          <div className="about-highlight-card">
            <h4>Key Focus</h4>
            <p>
              Improving existing videos, adding new content, and conducting robust
              evaluation to measure impact on student learning.
            </p>
          </div>
        </aside>
      </div>
    </section>

    {/* SIGCSE 2026 */}
    <section className="about-section">
      <div className="about-sigcse-card">
        <h2 className="about-section-title">OCCTIVE @ SIGCSE TS 2026</h2>
        <p>
          The project team presented the OCCTIVE library at the 2026 ACM
          SIGCSE Technical Symposium in St. Louis, Missouri.
        </p>
        <p>
          View the short paper, poster, and video introduction to the project here:{' '}
          <a
            href="https://dl.acm.org/doi/10.1145/3770761.3777292"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dl.acm.org/doi/10.1145/3770761.3777292<span className="sr-only"> (opens in new tab)</span>
          </a>
        </p>
      </div>
    </section>

    {/* Project Leadership */}
    <section className="about-leadership-section">
      <div className="about-leadership-wrapper">
        <h2 className="about-section-title">Project Leadership</h2>
        <table className="about-leadership-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Institution</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Kristina Striegnitz</td><td>PI</td><td>Union College</td></tr>
            <tr><td>Valerie Barr</td><td>co-PI</td><td>Bard College</td></tr>
            <tr><td>Andrea Tartaro</td><td>co-PI</td><td>Furman University</td></tr>
            <tr><td>Mia Minnes</td><td>co-PI</td><td>UC San Diego</td></tr>
            <tr><td>David Reider</td><td>Evaluation</td><td>Education Design</td></tr>
            <tr>
              <td>Madalene Spezialetti</td>
              <td>Video Collaboration</td>
              <td>Trinity College</td>
            </tr>
            <tr><td>Nick Webb</td><td>Workshop Collaboration</td><td>Union College</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* NSF Grant Info */}
    <section className="about-section">
      <div className="about-nsf-bar">
        <img
          src={`${process.env.PUBLIC_URL}/img/NSF_logo.png`}
          alt="NSF"
          className="about-nsf-bar-logo"
        />
        <p>
          OCCTIVE is supported by the NSF grant &ldquo;The efficacy of OCCTIVE:
          A computing-concepts video library for students and peer tutors in
          multidisciplinary contexts&rdquo; (Award Numbers: 2337251, 2337252,
          2337253, 2337254).
        </p>
      </div>
    </section>
  </section>
);

export default AboutPage;
