import React, { Component } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Person/Person";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";
class App extends Component {
  state = {
    persons: [
      {
        name: "Gautam",
        age: "26",
        id: "1"
      },
      {
        name: "Gaurav",
        age: "27",
        id: "2"
      },
      {
        name: "Gaurish",
        age: "23",
        id: "3"
      }
    ],
    username: "Rob",
    showPersons: false,
    strLength: 0,
    str: ""
  };

  nameChangeHandler = newName => {
    this.setState({
      persons: [
        {
          name: "Akshay",
          age: "23"
        },
        {
          name: newName,
          age: "27"
        },
        {
          name: "Gaurish",
          age: "28"
        }
      ]
    });
  };

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     {
    //       name: "Akshay",
    //       age: "23"
    //     },
    //     {
    //       name: "Gaurav",
    //       age: "27"
    //     },
    //     {
    //       name: event.target.value,
    //       age: "28"
    //     }
    //   ],
    //   username: event.target.value
    // });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    // const persons = {...this.state.presons}
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  lengthCounterHandler = event => {
    let str = event.target.value;

    this.setState({
      str: str,
      strLength: str.length
    });
  };

  deleteCharHandler = (event, charIndex) => {
    let string = this.state.str;
    string = string.split("");
    string.splice(charIndex, 1);
    let newStr = string.join("");

    this.setState({
      str: newStr,
      strLength: newStr.length
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid #eee",
      borderRadius: "4px",
      marginBottom: "15px",
      padding: "15px",
      ":hover": {
        backgroundColor: "grey"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div className="personWrap">
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.switchNameHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.nameChangeHandler.bind(this, "Aniket")}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.switchNameHandler}
          /> */}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "white",
        color: "black"
      };
    }

    let string = this.state.str;

    let letters = null;

    if (string) {
      string = string.split("");
      // console.log("string:", string);

      letters = string.map((char, index) => {
        // console.log("inside map", char);
        return (
          <CharComponent
            key={index}
            char={char}
            click={event => {
              this.deleteCharHandler(event, index);
            }}
          />
        );
      });
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <p className={classes.join(" ")}>Test app</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Show Names
        </button>
        {persons}
        <UserInput
          change={this.switchNameHandler}
          username={this.state.username}
        />
        <UserOutput username="Jake" />
        <UserOutput username={this.state.username} />
        <hr />
        <input
          type="text"
          onChange={this.lengthCounterHandler}
          value={this.state.str}
        />
        <ValidationComponent length={this.state.strLength} />
        {letters}
      </div>
    );
  }
}

export default Radium(App);
