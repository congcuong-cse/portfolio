import React, { Component } from "react";

class SkillsSummary extends Component {
  render() {
    console.log("Summary::render()");

    const { skills } = this.props;

    if (!skills) {
      return <div />;
    }

    return (
      <section className="section skills-summary-section">
        <h2 className="section-title">
          <i className="fa fa-user" />
          Skills
        </h2>
        <div className="skills-detail">
          {skills.map((e, idx) => (
            <div>
              <h3>{e.title}</h3>
              <p key={idx} dangerouslySetInnerHTML={{ __html: e.detail }} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default SkillsSummary;
