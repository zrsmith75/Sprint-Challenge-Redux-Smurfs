import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";
import { addSmurf } from "../actions";
import Smurf from "./Smurf";

class SmurfList extends Component {
  state = {
    newSmurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount() {
    this.props.getSmurf();
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.smurfs.map((smurf, id) => (
            <Smurf key={id} smurf={smurf} />
          ))}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="name"
              placeholder="name..."
              name="name"
              value={this.state.name}
            />
            <input
              onChange={this.handleChange}
              type="age"
              placeholder="age..."
              name="age"
              value={this.state.age}
            />
            <input
              onChange={this.handlechange}
              type="height"
              placeholder="height..."
              name="height"
              value={this.state.height}
            />
            <button value="submit">Add Smurf </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurf, addSmurf }
)(SmurfList);
