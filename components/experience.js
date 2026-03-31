import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  renderExperience(positions) {
    return positions.map((position, index) => {
      const details = position.description.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ));

      return (
        <div className="item" key={index}>
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{position.title}</h3>
              <div className="time">
                {position.period.from} -{" "}
                {position.period.to ? position.period.to : "Present"}
              </div>
            </div>
            {/* <div className="company">
              {position.company} - {position.location}
            </div> */}
          </div>
          <div className="details">{details}</div>
        </div>
      );
    });
  }

  render() {
    console.log("Experience::render()");

    const positionsByCompany = this.props.positions.reduce((acc, pos) => {
      if (acc[pos.company] === undefined) {
        acc[pos.company] = [];
      }
      acc[pos.company].push(pos);
      return acc;
    }, {});

    return (
      <section className="section experiences-section">
        <h2 className="section-title">
          <i className="fa fa-briefcase" />
          Experience
        </h2>
        {Object.entries(positionsByCompany).map(([key, positions]) => (
          <div>
            <h3 className="company-group-title">{key}</h3>
            <p className="location">{positions[0].location}</p>
            {this.renderExperience(positions)}
          </div>
        ))}
      </section>
    );
  }
}

export default Experience;
