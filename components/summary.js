import React, { Component } from 'react';

class Summary extends Component {
  render() {
    console.log('Summary::render()');

    const { profile } = this.props;

    if (!profile.summary) {
      return <div />;
    }

    return (
      <section className="section summary-section">
        <h2 className="section-title">
          <i className="fa fa-user" />
          Career Profile
        </h2>
        <div className="summary">
          {profile.summary.map((e, idx) => <p key={idx} dangerouslySetInnerHTML={{ __html: e }} />)}
        </div>
      </section>
    );
  }
}

export default Summary;
