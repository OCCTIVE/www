// File: src/layout/components/AdoptPage/index.tsx
// Provides information and resources for faculty interested in adopting OCCTIVE.

import { Link } from 'react-router-dom';
import React from 'react';
import './style.scss';

function AdoptPage() {
  return (
    <section className="adopt-page">
      {/* OCCTIVE hero */}
      <section className="home-page-hero">
        <header className="home-page-hero-content">
          <section className="home-page-hero-text">
            <h1 className="home-page-title">Adopt OCCTIVE</h1>
            <p className="home-page-text">
              Find out who can participate, what&rsquo;s involved, the
              support you&rsquo;ll receive, and resources to help you
              adopt the video toolkit.
            </p>
            <div className="home-page-hero-buttons">
              <a
                href="https://forms.gle/CiLWR96ztVktb1TB9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Bring OCCTIVE Into Your Course<span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </section>
        </header>
      </section>

      {/* Two-column intro with image */}
      <section className="adopt-section adopt-section--intro">
        <article className="adopt-intro-grid">
          <div className="adopt-intro-text">
            <p className="adopt-intro-lead">
              Do you use computing in your science, social science, math, humanities, or
              arts courses?
            </p>

            <p>
              Your students will benefit from additional material to help them get
              comfortable with the underlying computing concepts. The OCCTIVE library contains
              short videos designed to integrate with your course activities. In these videos,
              students get clear, brief, engaging explanations that help them more confidently
              apply computing knowledge.
            </p>

            <p>
              The OCCTIVE videos can be helpful whether you use a little computing or a lot of
              computing in your course. You select the videos that make the most sense based on
              the computational elements! For example, OCCTIVE has been used in a biology course
              in which students use R for data analysis in just three lab sessions. It has also
              been used in an economics course where R is used in the majority of class sessions,
              and in a physics course that uses Python programming.
            </p>
          </div>

          <figure className="adopt-intro-graphic">
            <span className="adopt-intro-graphic-bubble" aria-hidden="true">
              Adopt me!
            </span>
            <img
              src={`${process.env.PUBLIC_URL}/img/header_graphic.png`}
              alt="Illustration of a laptop with code windows and an octopus mascot"
              className="adopt-intro-graphic-img"
            />
          </figure>
        </article>
      </section>

      {/* Faculty Resources */}
      <section className="adopt-section adopt-section--tight-top">
        <article className="adopt-block">
          <h2>Faculty Resources</h2>

          <div className="adopt-resources-grid">
            <div className="adopt-resource-item">
              <h3>Guide to Videos</h3>
              <p>
                Check out the{' '}
                <Link to="/" className="adopt-link">
                  full video list
                </Link>{' '}
                and a{' '}
                <a
                  className="adopt-link"
                  href="https://docs.google.com/drawings/d/1lD1CxMXV6G_83KfyaABuvqY-g2SodAKmKiVu3FFWMo8/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  flowchart<span className="sr-only"> (opens in new tab)</span>
                </a>{' '}
                that shows video dependencies.
              </p>
            </div>

            <div className="adopt-resource-item">
              <h3>Video Captions</h3>
              <p>
                If interested in searching for coverage of a particular topic, the complete captions
                of all videos are viewable here.
              </p>
            </div>

            <div className="adopt-resource-item">
              <h3>Sample Exercises</h3>
              <p>
                This{' '}
                <a
                  className="adopt-link"
                  href="https://occtive.github.io/www/gfx/Example%20Exercises.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  document<span className="sr-only"> (opens in new tab)</span>
                </a>{' '}
                contains a number of exercises that provide examples for faculty who would
                like to create their own reinforcing exercises students can work on after
                watching the videos.
              </p>
            </div>

            <div className="adopt-resource-item adopt-resource-item--muted">
              <h3>
                Evaluating Code
                <span className="adopt-resource-badge">Coming soon</span>
              </h3>
              <p>Guidance on how to evaluate student code is in development.</p>
            </div>
          </div>

          <div className="adopt-further-reading">
            <h3>Resources for Further Exploration</h3>
            <ul>
              <li>
                <a
                  className="adopt-link"
                  href="https://posit.co/resources/cheatsheets/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RStudio Cheatsheets<span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  className="adopt-link"
                  href="http://adv-r.had.co.nz/Style.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Advanced R, a style guide by Hadley Wickham<span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  className="adopt-link"
                  href="https://mdsr-book.github.io/mdsr2e/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Modern Data Science with R by Benjamin S. Baumer, Daniel T. Kaplan, and Nicholas
                  Horton<span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  className="adopt-link"
                  href="https://data-feminism.mitpress.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Feminism by Catherine D&rsquo;Ignazio and Lauren F. Klein<span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* NSF Funding Info with logo */}
      <section className="adopt-section adopt-section--tight">
        <article className="adopt-nsf-footnote">
          <img
            src={`${process.env.PUBLIC_URL}/img/NSF_logo.png`}
            alt="National Science Foundation logo"
            className="adopt-nsf-footnote-logo"
          />
          <p>
            OCCTIVE is supported by the NSF grant &ldquo;The efficacy of a
            computing-concepts video library for students and peer tutors in
            multidisciplinary contexts&rdquo; (Award Numbers: 2337251, 2337252,
            2337253, 2337254). The first version was developed as part of the
            NSF grant &ldquo;Evaluating Frameworks for Incorporating Computing
            Across the Curriculum&rdquo; (award nos. 1935113, 1935099, 1935061).
          </p>
        </article>
      </section>

      {/* CTA Banner */}
      <section className="home-page-adoption-card">
        <div className="home-page-adoption-inner">
          <h2 className="home-page-adoption-title">
            We are always interested in having more faculty adopt the OCCTIVE library.
          </h2>
          <p className="home-page-adoption-text">
            If you are interested in integrating OCCTIVE into one or more of your courses and
            helping us collect data to evaluate the effectiveness of OCCTIVE, please fill out
            our interest form.
          </p>
          <div className="home-page-adoption-buttons">
            <a
              href="https://forms.gle/CiLWR96ztVktb1TB9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <b>Fill Out Our Interest Form</b><span className="sr-only"> (opens in new tab)</span>
            </a>
            <a
              href="mailto:occtive@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Reach Out to the Project Team
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}

export default AdoptPage;
