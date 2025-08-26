"use client";

import "../styles/Projects.css";

export default function Projects() {
    return (
       <section>
            <div className="projects-card">
                <h2>My Projects</h2>

                <p className="about-text">
                    Here are some projects I&apos;ve built to strengthen my skills in software development and IT infrastructure.
                </p>

                <div className="projects-container">
                    <div className="project-item">
                        <h3>Portfolio Website</h3>
                        <p>A personal portfolio showcasing my skills, projects, and contact information.</p>
                    </div>

                    <div className="project-item">
                        <h3>Task Manager App</h3>
                        <p>A full-stack task manager application with authentication and database support.</p>
                    </div>

                    <div className="project-item">
                        <h3>E-commerce Store</h3>
                        <p>A responsive e-commerce platform with cart and payment integration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
