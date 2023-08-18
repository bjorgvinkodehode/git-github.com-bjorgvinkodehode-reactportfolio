
import './Projects.css';

function Projects() {
    return (
        <div className="project-grid">

            <div className="card">
                <h2 className="card-title">Project 1</h2>
                <a href="#" className="card-link">
                    <img src="image_link_1.jpg" alt="Project 1 Image" className="card-image" />
                </a>
                <p className="card-description">
                    Description for Project 1. <a href="#" className="card-description-link">Read More</a>
                </p>
            </div>
            {/* ... replicate for 8 cards ... */}

        </div>
    );
}

export default Projects;
