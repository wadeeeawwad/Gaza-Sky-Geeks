
import ArrayState from './ArrayState';
import React, { Component } from "react";
import './App.css';


export default class App extends Component {
  

  constructor(props) {
    let arr = [{ name: 'Ahmad', age: 30 }, 
    { name: 'Yousef', age: 12 },
    { name: 'Shatha', age: 14 },
    { name: 'Rana', age: 22 },
    { name: 'Osama', age: 22 },
    { name: 'Ahmad', age: 38 }
    ];

    let age = {}
    let name = {}
    arr.forEach(element => { age[element.age] = 1; name[element.name] = 1 });
    age = Object.keys(age);
    name = Object.keys(name);

    super(props)
    this.state = {
      "age": age,
      "name": name
    }
  }

  deleteItem() {
    if (this.state.age) {
      this.state.age.pop();
    }
    if (this.state.name) {
      this.state.name.pop();
    }

    this.setState({ "": "" })
  }

  render() {
    return (
      <div>
        <ArrayState name={"Names"} item={this.state.name} />
        <ArrayState name={"Ages"} item={this.state.age} />
        <button onClick={this.deleteItem.bind(this)} className="buttonClass" >DELETE</button>
      </div>
    )
  }
}
