import PropTypes from 'prop-types';
function Projects() {
    return (
        <div>
                <section className="projects">
                    <ProjectCard 
                        title="card1"
                        src="https://bjorgvinkodehode.github.io/Pluto/"
                        description="This is one of the first websites i created, was having some problems deciding how to end this project as it was pretty open ended, but i got the style down in the end and im happy with how it turned out."
                    />
                    <ProjectCard 
                        title="card 2"
                        src="https://bjorgvinkodehode.github.io/Pluto/"
                        description="This is the content of section 2."
                    />
                    <ProjectCard 
                        title="card 3"
                        src="https://bjorgvinkodehode.github.io/Pluto/"
                        description="This is the content of section 2."
                    />
                    <ProjectCard 
                        title="card 4"
                        src="https://bjorgvinkodehode.github.io/Pluto/"
                        description="This is the content of section 2."
                    />
                    <ProjectCard 
                        title="card 5"
                        src="https://bjorgvinkodehode.github.io/Pluto/"
                        description="This is the content of section 2."
                    />
                </section>
        </div>
    );
}

function ProjectCard({ title, src, description }) {
    return (
        <div className={`card ${title}`}>
            <h2 className="projcth2">{title}</h2>
            <iframe className="iframe1" src={src} title={title}></iframe>
            <p className="projectp">{description}</p>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
  };

export default Projects;
