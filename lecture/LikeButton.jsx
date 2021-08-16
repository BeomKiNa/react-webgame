const React = require("react");
const { Component } = React;

class LikeButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     liked: false,
  //   };
  // }
  state = {
    liked: false,
  };

  render() {
    return (
      <button
        type="submit"
        onClick={() => {
          this.setState({ liked: true });
        }}
      >
        {this.state.liked ? "Liked" : "Like"}
      </button>
    ); // JSX: JS + XML
  }
}

module.exports = LikeButton;
