import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Experience::render()');

    const positions = this.props.positions;

    const experience = positions.map((position, index) => {
      const details = position.description.map((paragraph, idx) => <p key={idx}>{paragraph}</p>);

      return (
        <div className="item" key={index}>
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{position.title}</h3>
              <div className="time">
                {position.period.from} - {position.period.to ? position.period.to : 'Present'}
              </div>
            </div>
            <div className="company">
              {position.company} - {position.location}
            </div>
          </div>
          <div className="details">{details}</div>
        </div>
      );
    });

    return (
      <section className="section experiences-section">
        <h2 className="section-title">
          <i className="fa fa-briefcase" />
          Experience
        </h2>

        {experience}
      </section>
    );
  }
}

export default Experience;
