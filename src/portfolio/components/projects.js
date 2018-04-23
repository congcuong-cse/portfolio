import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateGallery();
  }

  componentDidUpdate() {
    this.updateGallery();
  }

  updateGallery() {
    // window.updateGallery();
  }

  render() {
    console.log('Projects::render()');

    const template = function (project, index) {
      const galleryID = project.title;

      const imagesTemplate = function (image, index) {
        return (
          <div className="col-xs-6 col-md-3">
            <a href={`./static/images/projects/${image}`} rel={galleryID} className="fancybox">
              <img src={`./static/images/projects/${image}`} alt="" />
            </a>
          </div>
        );
      };

      const gallery = project.gallery.map(imagesTemplate);

      return (
        <div className="item" key={index}>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.description}</p>
          <p className="project-tagline">{project.tags}</p>
          <p>
            <a href={project.url} target="_blank">
              {project.url}
            </a>
          </p>
          <div className="row gallery">{gallery}</div>
        </div>
      );
    };

    const projects = this.props.projects;
    const content = projects.map(template);

    if (projects.count == 0) {
      return <div />;
    }

    return (
      <section className="section projects-section">
        <h2 className="section-title">
          <i className="fa fa-archive" />
          Projects
        </h2>
        {content}
      </section>
    );
  }
}

export default Projects;
