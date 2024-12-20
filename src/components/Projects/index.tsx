import styles from './Project.module.css'
import projectsData from "../../data/projects.json";
import { Project } from "../../types";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Мои первые проекты</h2>
      <div className={styles.grid}>
        {projectsData.projects.map((project: Project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.livePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;