import React from "react";

export class CopiableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  handleCopy = async () => {
    const { text } = this.props;
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copy success");
      this.setState({ copied: true });

      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  render() {
    const { copied } = this.state;
    const { text } = this.props;

    return (
      <span
        onClick={this.handleCopy}
        style={{
          cursor: "pointer",
          // color: copied ? "green" : "blue",
          userSelect: "none",
        }}
      >
        {copied ? "copied!" : text}
      </span>
    );
  }
}
