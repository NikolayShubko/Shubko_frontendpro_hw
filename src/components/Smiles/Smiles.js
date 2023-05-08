import { Component } from "react";
import Image from "../Image/Image";
import "./Smiles.css";
class Smiles extends Component {
  constructor() {
    super();
    this.state = {
      reaction1: 0,
      reaction2: 0,
      reaction3: 0,
      winner: "",
    };
  }
  handleClick = (event) => {
    this.setState({ [event.target.name]: this.state[event.target.name] + 1 });
  };
  handleMax = () => {
    const arr = Object.values(this.state).filter(
      (elem) => typeof elem === "number"
    );
    const max = Math.max(...arr);
    if (this.state.reaction1 === max) {
      this.setState({ winner: "reaction1" });
    }
    if (this.state.reaction2 === max) {
      this.setState({ winner: "reaction2" });
    }
    if (this.state.reaction3 === max) {
      this.setState({ winner: "reaction3" });
    }
  };
  renderWinner = () => {
    if (this.state.winner === "") {
      return <p className="result">Wote for emoji</p>;
    }
    return (
      <p className="result">
        The best emoji is
        <img
          className="winner"
          src={require(`../../images/${this.state.winner}.png`)}
        />
      </p>
    );
  };
  render() {
    return (
      <div className="vote-holder">
        <Image
          className={"emoji"}
          src={require("../../images/reaction1.png")}
          onClick={this.handleClick}
          name="reaction1"
          value={this.state.reaction1}
        />
        <Image
          className={"emoji"}
          src={require("../../images/reaction2.png")}
          onClick={this.handleClick}
          name="reaction2"
          value={this.state.reaction2}
        />
        <Image
          className={"emoji"}
          src={require("../../images/reaction3.png")}
          onClick={this.handleClick}
          name="reaction3"
          value={this.state.reaction3}
        />
        <button className="btn" onClick={this.handleMax}>
          Best Smile
        </button>
        {this.renderWinner()}
      </div>
    );
  }
}
export default Smiles;
