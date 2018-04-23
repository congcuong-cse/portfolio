import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  updateSkillBars() {
    // window.updateBars();
  }

  componentDidMount() {
    this.updateSkillBars();
  }

  componentDidUpdate() {
    this.updateSkillBars();
  }

  render() {
    console.log('Skills::render()');

    const skills = this.props.skills;

    if (!skills.frontend || !skills.backend) {
      return <div />;
    }

    const template = (skill, index) => (
      <div className="item" key={index}>
        <h3 className="level-title">{skill.title}</h3>
        <div className="level-bar">
          <div
            className="level-bar-inner"
            data-level={`${skill.level}%`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    );

    const skillSetFrontend = skills.frontend.tools.map(template);
    const skillSetBackend = skills.backend.tools.map(template);
    const skillSetMobile = skills.mobile.tools.map(template);

    return (
      <section className="skills-section section">
        <h2 className="section-title">
          <i className="fa fa-rocket" />
          Skills &amp; Proficiency
        </h2>
        <h3>Frontend</h3>
        <div className="skillset">{skillSetFrontend}</div>
        <p>Extra: {skills.frontend.extra.join(', ')}</p>
        <h3>Backend</h3>
        <div className="skillset">{skillSetBackend}</div>
        <p>Extra: {skills.backend.extra.join(', ')}</p>
        <h3>Mobile</h3>
        <div className="skillset">{skillSetMobile}</div>
        <p>Extra: {skills.mobile.extra.join(', ')}</p>
      </section>
    );
  }
}

export default Skills;
