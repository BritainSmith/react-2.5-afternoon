import React, { Component } from "react";

class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    operators: ["add", "subtract", "multiply", "divide"],
    selected: ""
  };
  handleChange = ({ target: { value, name } }) => {
    console.log(value, name);
    this.setState({ [name]: value });
  };

  solution = () => {
    let { selected, num1, num2 } = this.state;
    switch (selected) {
      case "add":
        return +num1 + +num2;
      case "subtract":
        return +num1 - +num2;
      case "divide":
        return +num2 / +num1;
      case "multiply":
        return +num1 * +num2;
    }
  };

  render() {
    return (
      <div className="Calculator">
        <select name="selected" onChange={this.handleChange}>
          {" "}
          == $0
          <option value=""> --- Select an Option</option>
          <option value="add"> add</option>
          <option value="subtract">subtract</option>
          <option value="multiply">multiply</option>
          <option value="divide">divide</option>
        </select>
        <br />
        <input
          type="number"
          val={this.state.num1}
          name="num1"
          placeholder="Num1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          value={this.state.num2}
          name="num2"
          placeholder="Num2"
          onChange={this.handleChange}
        />
        <br />
        Solution: {this.solution()}
      </div>
    );
  }
}
export default Calculator;
